from __future__ import annotations

from typing import Optional

from sqlalchemy import Column, Text
from sqlmodel import SQLModel, Field


class BirthdayGeneration(SQLModel, table=True):
    __tablename__ = "birthday_generation"
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user_info.id")
    generated_text: Optional[str] = Field(default=None, sa_column=Column(Text))
    generated_image_path: Optional[str] = Field(default=None, sa_column=Column(Text))

__all__ = ["BirthdayGeneration"]

