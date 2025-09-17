from __future__ import annotations

import os
from typing import Generator

from sqlmodel import SQLModel, Session, create_engine


# Default to a local SQLite database file in the backend directory
if "DATABASE_URL" in os.environ and os.environ["DATABASE_URL"]:
    DATABASE_URL = os.environ["DATABASE_URL"]
else:
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    db_path = os.path.normpath(os.path.join(base_dir, "db.sqlite3"))
    # Ensure cross-platform path formatting for SQLAlchemy URL
    DATABASE_URL = f"sqlite:///{db_path.replace('\\', '/')}"

# For SQLite, need check_same_thread=False for multithreaded FastAPI
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, echo=False, connect_args=connect_args)


def init_db() -> None:
    """Create database tables if they don't exist."""
    # Import models here so SQLModel knows about them before create_all
    # Import models locally to register them
    from models.contacts import Contact  # noqa: F401
    from models.send_logs import SendLog  # noqa: F401

    SQLModel.metadata.create_all(engine)


def get_session() -> Generator[Session, None, None]:
    """FastAPI dependency to provide a SQLModel Session."""
    with Session(engine) as session:
        yield session
