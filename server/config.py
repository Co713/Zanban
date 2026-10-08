from functools import lru_cache

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    public_base_url: str = "http://127.0.0.1:8000"
    jwt_secret: str = "zanban-dev-secret-change-me"
    jwt_expire_hours: int = 168
    cors_origins: str = "*"

    aliyun_access_key_id: str = ""
    aliyun_access_key_secret: str = ""
    aliyun_sms_sign_name: str = ""
    aliyun_sms_template_code: str = ""
    aliyun_sms_template_param_key: str = "code"

    wechat_app_id: str = ""
    wechat_app_secret: str = ""

    # 高德地图 Web 端（JS API）https://console.amap.com/dev/key/app
    amap_key: str = ""
    amap_security_js_code: str = ""

    # 未配置阿里云时：验证码打印到服务端控制台，并在接口中回传便于本地联调
    sms_dev_echo: bool = True

    @field_validator(
        "amap_key",
        "amap_security_js_code",
        "aliyun_access_key_id",
        "aliyun_access_key_secret",
        "aliyun_sms_sign_name",
        "aliyun_sms_template_code",
        "wechat_app_id",
        "wechat_app_secret",
        "public_base_url",
        mode="before",
    )
    @classmethod
    def strip_str(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v

    @property
    def sms_ready(self) -> bool:
        return bool(
            self.aliyun_access_key_id
            and self.aliyun_access_key_secret
            and self.aliyun_sms_sign_name
            and self.aliyun_sms_template_code
        )

    @property
    def wechat_ready(self) -> bool:
        return bool(self.wechat_app_id and self.wechat_app_secret)

    @property
    def amap_ready(self) -> bool:
        return bool(self.amap_key)

    @property
    def sms_echo_mode(self) -> bool:
        return (not self.sms_ready) and self.sms_dev_echo

    @property
    def cors_origin_list(self) -> list[str]:
        if self.cors_origins.strip() == "*":
            return ["*"]
        return [x.strip() for x in self.cors_origins.split(",") if x.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
