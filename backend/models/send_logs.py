from __future__ import annotations

from datetime import datetime
from typing import Optional

from sqlalchemy import Column, DateTime, Text
from sqlmodel import SQLModel, Field


class SendLog(SQLModel, table=True):
    __tablename__ = "send_logs"
    id: Optional[int] = Field(default=None, primary_key=True)
    contact_id: int = Field(foreign_key="contact.id")
    channel: str
    status: str
    timestamp: datetime = Field(
        default_factory=datetime.now,
        sa_column=Column(DateTime, nullable=False)
    )
    details: Optional[str] = Field(default=None, sa_column=Column(Text))

    # Lazy import type hint to avoid circular dependency at runtime
    # Relationship omitted to avoid circular import complexity


__all__ = ["SendLog"]

