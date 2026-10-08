from __future__ import annotations

from fastapi import APIRouter, Depends, Header, HTTPException, Query
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from .config import Settings, get_settings
from .db import User, get_db
from . import sms, wechat
from .security import create_access_token, parse_access_token

router = APIRouter(prefix="/api/auth", tags=["auth"])


class SendSmsIn(BaseModel):
    phone: str = Field(..., min_length=11, max_length=11)


class SmsLoginIn(BaseModel):
    phone: str = Field(..., min_length=11, max_length=11)
    code: str = Field(..., min_length=4, max_length=8)


class RoleIn(BaseModel):
    role: str


def _valid_phone(phone: str) -> bool:
    return phone.isdigit() and len(phone) == 11 and phone.startswith("1")


def _user_dict(user: User) -> dict:
    return {
        "id": user.id,
        "phone": user.phone or "",
        "nickname": user.nickname or "",
        "role": user.role,
        "points": user.points or 0,
        "method": "wechat" if user.wechat_openid and not user.phone else ("phone" if user.phone else "unknown"),
        "has_wechat": bool(user.wechat_openid),
    }


def _auth_response(settings: Settings, user: User, is_new: bool) -> dict:
    token = create_access_token(settings, user.id)
    return {
        "token": token,
        "is_new": is_new,
        "user": _user_dict(user),
    }


def get_current_user(
    authorization: str | None = Header(default=None),
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
) -> User:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="未登录")
    token = authorization.removeprefix("Bearer ").strip()
    user_id = parse_access_token(settings, token)
    if not user_id:
        raise HTTPException(status_code=401, detail="登录已失效")
    user = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=401, detail="用户不存在")
    return user


@router.get("/config")
def auth_config(settings: Settings = Depends(get_settings)):
    return {
        "sms_ready": settings.sms_ready,
        "sms_echo_mode": settings.sms_echo_mode,
        "wechat_ready": settings.wechat_ready,
        "amap_ready": settings.amap_ready,
        "amap_key": settings.amap_key if settings.amap_ready else "",
        "amap_security_js_code": settings.amap_security_js_code if settings.amap_ready else "",
        "public_base_url": settings.public_base_url,
        "wechat_app_id": settings.wechat_app_id if settings.wechat_ready else "",
        "wechat_redirect_uri": wechat.qr_redirect_uri(settings) if settings.wechat_ready else "",
    }


@router.post("/sms/send")
def send_sms(payload: SendSmsIn, settings: Settings = Depends(get_settings)):
    phone = payload.phone.strip()
    if not _valid_phone(phone):
        raise HTTPException(status_code=400, detail="手机号格式不正确")
    if not settings.sms_ready and not settings.sms_echo_mode:
        raise HTTPException(status_code=503, detail="服务端未配置短信，请先填写 .env 中的阿里云短信参数")

    ok, wait = sms.can_send(phone)
    if not ok:
        raise HTTPException(status_code=429, detail=f"请 {wait} 秒后再获取验证码")

    code = sms.generate_code()
    if settings.sms_ready:
        try:
            sms.send_sms_code(settings, phone, code)
        except Exception as exc:  # noqa: BLE001
            raise HTTPException(status_code=502, detail=str(exc)) from exc
        sms.save_code(phone, code)
        return {"ok": True, "message": "验证码已发送", "cooldown": 60}

    # 本地联调：不发真短信，回传验证码
    sms.save_code(phone, code)
    print(f"[攒班SMS联调] {phone} 验证码: {code}", flush=True)
    return {
        "ok": True,
        "message": "联调模式：验证码已生成（未走短信通道）",
        "cooldown": 60,
        "dev_code": code,
    }


@router.post("/sms/login")
def sms_login(
    payload: SmsLoginIn,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    phone = payload.phone.strip()
    code = payload.code.strip()
    if not _valid_phone(phone):
        raise HTTPException(status_code=400, detail="手机号格式不正确")
    if not code.isdigit() or not (4 <= len(code) <= 8):
        raise HTTPException(status_code=400, detail="验证码格式不正确")
    if not sms.verify_code(phone, code):
        raise HTTPException(status_code=400, detail="验证码错误或已过期")

    user = db.query(User).filter(User.phone == phone).first()
    is_new = False
    if not user:
        user = User(phone=phone, points=0)
        db.add(user)
        db.commit()
        db.refresh(user)
        is_new = True
    elif not user.role:
        is_new = True

    return _auth_response(settings, user, is_new)


@router.get("/wechat/prepare")
def wechat_prepare(settings: Settings = Depends(get_settings)):
    if not settings.wechat_ready:
        raise HTTPException(status_code=503, detail="服务端未配置微信扫码登录，请填写 WECHAT_APP_ID / WECHAT_APP_SECRET")
    state = wechat.create_state()
    return {
        "appid": settings.wechat_app_id,
        "redirect_uri": wechat.qr_redirect_uri(settings),
        "state": state,
        "scope": "snsapi_login",
        "qrconnect_url": wechat.build_qrconnect_url(settings, state),
    }


@router.get("/wechat/callback")
async def wechat_callback(
    code: str | None = Query(default=None),
    state: str | None = Query(default=None),
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    if not code or not state:
        raise HTTPException(status_code=400, detail="微信回调缺少 code/state")
    if not wechat.consume_state(state):
        raise HTTPException(status_code=400, detail="二维码已失效，请重新扫码")

    try:
        profile = await wechat.exchange_code(settings, code)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=str(exc)) from exc

    openid = profile["openid"]
    user = db.query(User).filter(User.wechat_openid == openid).first()
    is_new = False
    if not user:
        user = User(
            wechat_openid=openid,
            wechat_unionid=profile.get("unionid"),
            nickname=profile.get("nickname"),
            points=0,
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        is_new = True
    else:
        if profile.get("nickname"):
            user.nickname = profile["nickname"]
        if profile.get("unionid"):
            user.wechat_unionid = profile["unionid"]
        db.commit()
        if not user.role:
            is_new = True

    token = create_access_token(settings, user.id)
    # 回跳前端，由页面读取 token 完成登录
    target = (
        f"{settings.public_base_url.rstrip('/')}/"
        f"?wechat_token={token}&is_new={'1' if is_new else '0'}#landing"
    )
    # 同时返回一个可关闭的中间页，便于嵌入场景
    html = f"""<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"><title>微信登录成功</title>
<style>
body{{font-family:sans-serif;display:grid;place-items:center;min-height:100vh;background:#f2f4ef;color:#1e2f2a}}
</style></head>
<body>
<p>登录成功，正在返回攒班…</p>
<script>
  const target = {target!r};
  if (window.opener) {{
    window.opener.postMessage({{ type: "zanban-wechat-login", token: {token!r}, is_new: {str(is_new).lower()} }}, "*");
    window.close();
  }} else {{
    location.replace(target);
  }}
</script>
</body></html>"""
    return HTMLResponse(html)


@router.post("/role")
def set_role(
    payload: RoleIn,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
):
    role = payload.role.strip()
    if role not in {"student", "teacher"}:
        raise HTTPException(status_code=400, detail="身份无效")
    user.role = role
    db.commit()
    db.refresh(user)
    return _auth_response(settings, user, is_new=False)


@router.get("/me")
def me(user: User = Depends(get_current_user)):
    return {"user": _user_dict(user)}
