"""启动入口：uvicorn server.main:app --reload --host 0.0.0.0 --port 8000"""

from server.main import app

__all__ = ["app"]
