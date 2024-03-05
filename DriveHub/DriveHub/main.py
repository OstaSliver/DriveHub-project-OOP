from fastapi import FastAPI, Request , HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
import uvicorn

from user import User

from websitecontroller import WebsiteController

from fastapi.staticfiles import StaticFiles

from post_model import *

app = FastAPI()

templates = Jinja2Templates(directory="Frontend")

website = WebsiteController()

def init():
    website.register("oat@gmail.com","oat","0967459032","1234","customer")
    # print(website.User_list[0].email)


# app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get('/home')
def home(request: Request):
    return {"status": "Login Successful"}


@app.get('/login.html')
def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post('/login')
# async def login(email: str, password: str):
async def login(login_data: LoginModel):
    # log = website.login(Login.username, Login.password)
    # log = website.login(email, password)
    log = website.login(login_data.username, login_data.password)
    if log == "Login Successful":
        # raise HTTPException(status_code=200, detail="Login Successful")
        return {"status": "Login Successful","Token": "a"}
        # return RedirectResponse(url='/home')
    elif log == "Incorrect Password":
        raise HTTPException(status_code=200, detail="Incorrect Password")
    elif log == "Email not found":
        raise HTTPException(status_code=200, detail="Email not found")
        # return RedirectResponse(url='/')
    return {"status": "Login Successful","Token": "a"}

@app.get('/register.html')
def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.post('/register')
async def register(request: Request, email: str, Name: str, Phone_Number: str, Password: str, Contact_info: str, Role: str):
    if website.register(email, Name, Phone_Number, Password, Contact_info, Role) == "Registration Successful":
        return {"status": "Registration Successful"}
        
    else:
        raise HTTPException(status_code=400, detail="Registration Failed")
    return {"status": "Registration Successful"}

@app.get('/User')
async def get_user():
    data = []
    for user in website.User_list:
        data.append({"email": user.email, "Name": user.name, "Phone_Number": user.phone_number, "Password": user.password, "Contact_info": user.contact_info, "Role": user.role})
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