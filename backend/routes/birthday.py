from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session

from core.database import get_session
from schemas.birthday import GenerateBirthdayRequest, GenerateBirthdayResponse
from services.birthday import generate_birthday_for_email

router = APIRouter(prefix="/birthday", tags=["birthday"])


@router.post("/generate", response_model=GenerateBirthdayResponse, status_code=status.HTTP_200_OK)
async def generate_birthday_message_endpoint(
    payload: GenerateBirthdayRequest,
    session: Session = Depends(get_session),
):
    return await generate_birthday_for_email(payload, session)
