from __future__ import annotations

import json
import random
import string
import time
from dataclasses import dataclass

from alibabacloud_dysmsapi20170525 import models as dysms_models
from alibabacloud_dysmsapi20170525.client import Client as DysmsClient
from alibabacloud_tea_openapi import models as open_api_models

from .config import Settings


@dataclass
class CodeRecord:
    code: str
    expire_at: float
    last_sent_at: float


_code_store: dict[str, CodeRecord] = {}


def _now() -> float:
    return time.time()


def generate_code(length: int = 6) -> str:
    return "".join(random.choices(string.digits, k=length))


def can_send(phone: str, cooldown: int = 60) -> tuple[bool, int]:
    rec = _code_store.get(phone)
    if not rec:
        return True, 0
    wait = int(cooldown - (_now() - rec.last_sent_at))
    if wait > 0:
        return False, wait
    return True, 0


def save_code(phone: str, code: str, ttl: int = 300) -> None:
    now = _now()
    _code_store[phone] = CodeRecord(code=code, expire_at=now + ttl, last_sent_at=now)


def verify_code(phone: str, code: str) -> bool:
    rec = _code_store.get(phone)
    if not rec:
        return False
    if _now() > rec.expire_at:
        _code_store.pop(phone, None)
        return False
    if rec.code != code:
        return False
    _code_store.pop(phone, None)
    return True


def _aliyun_client(settings: Settings) -> DysmsClient:
    config = open_api_models.Config(
        access_key_id=settings.aliyun_access_key_id,
        access_key_secret=settings.aliyun_access_key_secret,
    )
    config.endpoint = "dysmsapi.aliyuncs.com"
    return DysmsClient(config)


def send_sms_code(settings: Settings, phone: str, code: str) -> None:
    if not settings.sms_ready:
        raise RuntimeError("未配置阿里云短信，请在 .env 填写 ALIYUN_* 参数")

    client = _aliyun_client(settings)
    param_key = settings.aliyun_sms_template_param_key or "code"
    request = dysms_models.SendSmsRequest(
        phone_numbers=phone,
        sign_name=settings.aliyun_sms_sign_name,
        template_code=settings.aliyun_sms_template_code,
        template_param=json.dumps({param_key: code}, ensure_ascii=False),
    )
    resp = client.send_sms(request)
    body = resp.body
    if not body or body.code != "OK":
        message = getattr(body, "message", None) or "短信发送失败"
        raise RuntimeError(f"短信发送失败：{message}")
