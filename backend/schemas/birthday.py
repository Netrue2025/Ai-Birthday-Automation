from __future__ import annotations

from datetime import date
from pydantic import BaseModel, EmailStr


class GenerateBirthdayRequest(BaseModel):
    email: EmailStr


class GenerateBirthdayResponse(BaseModel):
    user_id: int
    name: str
    gender: str
    birth_date: date
    message: str
