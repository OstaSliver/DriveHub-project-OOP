from pydantic import BaseModel
from typing import List, Optional

class RegisterModel(BaseModel):
    email: str
    Name: str
    Phone_Number: str
    Password: str
    Contact_info: str
    Role: str

class LoginModel(BaseModel):
    email: str
    password: str

class UserModel(BaseModel):
    username: str
    password: str
    role: str

class TestModel(BaseModel):
    name: str

    