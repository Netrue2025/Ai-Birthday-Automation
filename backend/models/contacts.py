from __future__ import annotations

from datetime import date
from typing import Optional

from sqlmodel import SQLModel, Field
from sqlalchemy import Column, String


class Contact(SQLModel, table=True):
    """Contact model containing user birthday info"""

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    nickname: Optional[str] = None
    
    birth_date: date
    email: Optional[str] = Field(default=None, sa_column=Column(String, unique=True))
    phone_number: Optional[str] = Field(default=None, sa_column=Column(String, unique=True))
    image_path: Optional[str] = None

    whatsapp_group_id: Optional[str] = None


__all__ = ["Contact"]

