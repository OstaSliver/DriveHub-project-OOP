from pydantic import BaseModel
from typing import List, Optional

class RegisterModel(BaseModel):
    email: str
    password: str

class LoginModel(BaseModel):
    email: str
    password: str

class UserModel(BaseModel):
    username: str
    password: str
    role: str

class TokenModel(BaseModel):
    token: str

    