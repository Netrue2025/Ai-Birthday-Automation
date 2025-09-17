from __future__ import annotations

from datetime import date
from typing import Optional

from pydantic import EmailStr
from sqlmodel import SQLModel


class ContactCreate(SQLModel):
    name: str
    nickname: Optional[str] = None
    birth_date: date
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None
    image_path: Optional[str] = None
    whatsapp_group_id: Optional[str] = None


class ContactRead(SQLModel):
    id: int
    name: str
    nickname: Optional[str] = None
    birth_date: date
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None
    image_path: Optional[str] = None
    whatsapp_group_id: Optional[str] = None
