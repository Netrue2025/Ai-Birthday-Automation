from fastapi import FastAPI

from contextlib import asynccontextmanager

from core.database import init_db
from routes.contacts import router as contacts_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup actions
    init_db()
    yield
    # Shutdown actions (if any)

app = FastAPI(lifespan=lifespan, title="AI Birthday Automation")


@app.get("/")
async def root():
    # Simple root endpoint
    return {"message": "Hello World"}


app.include_router(contacts_router)