from __future__ import annotations

from datetime import date
from typing import Optional, Annotated

from fastapi import APIRouter, Depends, UploadFile, File, Form, status, HTTPException
from sqlmodel import Session

from core.database import get_session
from schemas.user_schemas import AddUser, ReadUserInfo
from services.user_service import create_contact


router = APIRouter(prefix="/api", tags=["users"])


@router.post("/users", response_model=ReadUserInfo, status_code=status.HTTP_201_CREATED)
async def create_contact_endpoint(
    # Accept form fields for the model data when using multipart/form-data
    name: str = Form(...),
    birth_date: date = Form(...),
    gender: str = Form(...),
    email: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    whatsapp_group_id: Optional[str] = Form(None),
    # Accept the uploaded image file
    #image_path: UploadFile = File(...),
    session: Session = Depends(get_session),
):
    try:
        print("poli this eorrows")
        # Build the pydantic/SQLModel object from form fields
        data = AddUser(
            name=name,
            birth_date=birth_date,
            email=email,
            phone_number=phone_number,
            whatsapp_group_id=whatsapp_group_id,
            gender=gender
        )
        #contact = await create_contact(session, data, image_path)
        contact = await create_contact(session, data)
        return contact
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

