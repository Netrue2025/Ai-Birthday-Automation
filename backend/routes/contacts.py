from __future__ import annotations

from datetime import date
from typing import Optional

from fastapi import APIRouter, Depends, UploadFile, File, Form, status, HTTPException
from sqlmodel import Session

from core.database import get_session
from schemas.contacts import ContactCreate, ContactRead
from services.contacts import create_contact


router = APIRouter(prefix="/contacts", tags=["contacts"])


@router.post("/", response_model=ContactRead, status_code=status.HTTP_201_CREATED)
async def create_contact_endpoint(
    name: str = Form(...),
    nickname: Optional[str] = Form(None),
    birth_date: date = Form(...),
    email: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    whatsapp_group_id: Optional[str] = Form(None),
    image: UploadFile | None = File(None),
    session: Session = Depends(get_session),
):
    try:
        payload = ContactCreate(
            name=name,
            nickname=nickname,
            birth_date=birth_date,
            email=email,
            phone_number=phone_number,
            image_path=None,  # set by service after upload
            whatsapp_group_id=whatsapp_group_id,
        )

        contact = await create_contact(session, data=payload, image=image)
        return ContactRead.model_validate(contact, from_attributes=True)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
    # unreachable
