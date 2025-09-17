import os
import smtplib
import cloudinary.uploader
from fastapi import Response
from cloudinary.uploader import destroy

async def upload_to_cloudinary(file, folder, resource_type="image"):
    result = cloudinary.uploader.upload(
        file,
        folder=folder,
        resource_type=resource_type,
        overwrite=True,
    )
    return result["secure_url"], result["public_id"]


async def extract_public_id(url):
    if not url:
        return None
    try:
        # Get the part after '/upload/'
        path = url.split('/upload/')[1]
        # Remove version if present (e.g., v1749168422/)
        if path.startswith('v') and '/' in path:
            path = path.split('/', 1)[1]
        # Remove file extension
        public_id = '.'.join(path.split('.')[:-1])
        return public_id
    except Exception:
        return None

async def delete_cloudinary_file(public_id, resource_type="image"):
    try:
        if public_id:
            destroy(public_id, resource_type=resource_type)
    except Exception as e:
        return Response(f"Failed to delete Cloudinary file {public_id}: {e}")