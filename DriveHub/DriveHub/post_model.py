from pydantic import BaseModel
from typing import List, Optional

class RegisterModel(BaseModel):
    username: str
    password: str
    