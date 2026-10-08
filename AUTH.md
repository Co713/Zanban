# 攒班 · 真实登录配置说明

## 启动

```bash
# 在项目根目录
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
# 编辑 .env 填入密钥后：
uvicorn server.main:app --reload --host 0.0.0.0 --port 8000
```

浏览器打开：http://127.0.0.1:8000

## 手机验证码（阿里云短信）

1. 开通 [阿里云短信服务](https://dysms.console.aliyun.com/)
2. 申请签名、模板（模板需含验证码变量，如 `${code}`）
3. 创建 AccessKey
4. 写入 `.env`：

```
ALIYUN_ACCESS_KEY_ID=...
ALIYUN_ACCESS_KEY_SECRET=...
ALIYUN_SMS_SIGN_NAME=你的签名
ALIYUN_SMS_TEMPLATE_CODE=SMS_xxx
ALIYUN_SMS_TEMPLATE_PARAM_KEY=code
```

接口：
- `POST /api/auth/sms/send` `{"phone":"13800138000"}`
- `POST /api/auth/sms/login` `{"phone":"13800138000","code":"123456"}`

## 微信扫码登录（开放平台网站应用）

1. 注册 [微信开放平台](https://open.weixin.qq.com/) 并创建「网站应用」
2. 通过审核后拿到 AppID / AppSecret
3. 配置授权回调域（不含协议与路径，如 `login.yourdomain.com`）
4. 本地调试需公网 HTTPS（可用 ngrok / 花生壳），并设置：

```
PUBLIC_BASE_URL=https://你的公网域名
WECHAT_APP_ID=...
WECHAT_APP_SECRET=...
```

回调地址固定为：`{PUBLIC_BASE_URL}/api/auth/wechat/callback`

前端使用微信官方 `WxLogin` 展示二维码；扫码成功后回跳并写入登录态。

## 高德地图与定位

1. 打开 [高德开放平台](https://console.amap.com/dev/key/app) 创建应用
2. Key 类型选择 **Web端(JS API)**
3. 配置安全密钥，域名白名单加入 `127.0.0.1`、`localhost` 及你的线上域名
4. 写入 `.env`：

```
AMAP_KEY=你的Key
AMAP_SECURITY_JS_CODE=你的安全密钥
```

5. 重启后端后刷新页面；发现页将加载真实地图，并请求定位以计算课程距离。  
   未配置时仍可浏览课程，地图为示意样式，距离使用示例数据（浏览器若授权定位会尝试按真实坐标重算）。

## 安全提醒

- 不要把 `.env` 提交到仓库
- 生产环境务必更换 `JWT_SECRET`
- 微信回调必须使用已备案域名的 HTTPS
- 高德 Key 请在控制台限制域名，避免被盗用
