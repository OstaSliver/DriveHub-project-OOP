from fastapi import FastAPI, Request , HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse

from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from user import User

from websitecontroller import WebsiteController

from fastapi.staticfiles import StaticFiles

from post_model import *

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)
templates = Jinja2Templates(directory="Frontend")

website = WebsiteController()

def init():
    website.register("oat@gmail.com","oat","0967459032","1234","customer")
    # print(website.User_list[0].email)


# app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
    pass

@app.get('/home')
def home(request: Request):
    return {"status": "Login Successful"}


@app.get('/login.html')
def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.get('/login')
def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})
    pass

@app.post('/login')
# async def login(email: str, password: str):
async def login(login_data: LoginModel):
    email: str = login_data.email
    password: str = login_data.password
    log = website.login(email, password)
    if log == "Login Successful":
        return {"status": "Login Successful","Token": "a"}
    elif log == "Incorrect Password":
        raise HTTPException(status_code=201, detail="Incorrect Password")
    elif log == "Email not found":
        raise HTTPException(status_code=202, detail="Email not found")
    return {"status": "Login Successful","token": log.token}

# @app.post('/test')
# async def test(data: TestModel):
#     return {"status": "Test Successful" , "name": data.name}

@app.get('/register')
def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.post('/register')
async def register(register_data: RegisterModel):
    email: str = register_data.email
    Name: str = register_data.Name
    Phone_Number: str = register_data.Phone_Number
    Password: str = register_data.Password
    Role: str = register_data.Role

    log = website.register(email, Name, Phone_Number, Password, Role)
    if log == "Registration Successful":
        return {"status": "Registration Successful"}
        
    elif log == "User already exists":
        raise HTTPException(status_code=401, detail="User already exists")
    
    elif log == "Invalid Role":
        raise HTTPException(status_code=402, detail="Invalid Role")
    
    return {"status": "Registration Successful"}

@app.get('/User')
async def get_user():
    data = []
    for user in website.user_list:
        data.append({"email": user.email, "Name": user.name, "Phone_Number": user.phone_number, "Password": user.password, "Contact_info": user.contact_info, "Role": user.role , "Token": user.token})
    return data

@app.get('/init')
async def init_user():
    init()
    return {"status": "Init Successful"}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host    = "127.0.0.1",
        port    = 8000, 
        reload  = True
    )