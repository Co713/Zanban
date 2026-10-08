from __future__ import annotations

import secrets
import time
from dataclasses import dataclass
from urllib.parse import quote

import httpx

from .config import Settings


@dataclass
class WechatState:
    expire_at: float


_state_store: dict[str, WechatState] = {}


def create_state(ttl: int = 600) -> str:
    state = secrets.token_urlsafe(24)
    _state_store[state] = WechatState(expire_at=time.time() + ttl)
    return state


def consume_state(state: str) -> bool:
    rec = _state_store.pop(state, None)
    if not rec:
        return False
    if time.time() > rec.expire_at:
        return False
    return True


def qr_redirect_uri(settings: Settings) -> str:
    return f"{settings.public_base_url.rstrip('/')}/api/auth/wechat/callback"


def build_qrconnect_url(settings: Settings, state: str) -> str:
    redirect = quote(qr_redirect_uri(settings), safe="")
    return (
        "https://open.weixin.qq.com/connect/qrconnect"
        f"?appid={settings.wechat_app_id}"
        f"&redirect_uri={redirect}"
        "&response_type=code"
        "&scope=snsapi_login"
        f"&state={state}"
        "#wechat_redirect"
    )


async def exchange_code(settings: Settings, code: str) -> dict:
    if not settings.wechat_ready:
        raise RuntimeError("未配置微信开放平台，请在 .env 填写 WECHAT_APP_ID / WECHAT_APP_SECRET")

    token_url = "https://api.weixin.qq.com/sns/oauth2/access_token"
    async with httpx.AsyncClient(timeout=15) as client:
        token_resp = await client.get(
            token_url,
            params={
                "appid": settings.wechat_app_id,
                "secret": settings.wechat_app_secret,
                "code": code,
                "grant_type": "authorization_code",
            },
        )
        token_data = token_resp.json()
        if "errcode" in token_data and token_data.get("errcode"):
            raise RuntimeError(
                f"微信授权失败：{token_data.get('errmsg', token_data.get('errcode'))}"
            )

        access_token = token_data["access_token"]
        openid = token_data["openid"]
        unionid = token_data.get("unionid")

        user_resp = await client.get(
            "https://api.weixin.qq.com/sns/userinfo",
            params={
                "access_token": access_token,
                "openid": openid,
            },
        )
        user_data = user_resp.json()
        if "errcode" in user_data and user_data.get("errcode"):
            # userinfo 失败时仍可用 openid 登录
            return {
                "openid": openid,
                "unionid": unionid,
                "nickname": None,
            }

        return {
            "openid": openid,
            "unionid": user_data.get("unionid") or unionid,
            "nickname": user_data.get("nickname"),
        }
