from pydantic import BaseModel
from typing import List, Optional

class RegisterModel(BaseModel):
    username: str
    password: str

class LoginModel(BaseModel):
    username: str
    password: str

class UserModel(BaseModel):
    username: str
    password: str
    role: str

    