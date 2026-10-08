from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from server.config import get_settings
from server.db import init_db
from server.auth_router import router as auth_router

ROOT = Path(__file__).resolve().parent.parent
settings = get_settings()

app = FastAPI(title="攒班 ZanBan API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/api/health")
def health():
    return {
        "ok": True,
        "sms_ready": settings.sms_ready,
        "wechat_ready": settings.wechat_ready,
        "amap_ready": settings.amap_ready,
    }


app.mount("/images", StaticFiles(directory=ROOT / "images"), name="images")


@app.get("/")
def index():
    return FileResponse(ROOT / "index.html")


@app.get("/styles.css")
def styles():
    return FileResponse(ROOT / "styles.css")


@app.get("/app.js")
def app_js():
    return FileResponse(ROOT / "app.js")


@app.get("/carousel.js")
def carousel_js():
    return FileResponse(ROOT / "carousel.js")


@app.get("/map.js")
def map_js():
    return FileResponse(ROOT / "map.js")
