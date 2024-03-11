from fastapi import FastAPI, Request , HTTPException,Header,Response
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi import Form
from fastapi.middleware.cors import CORSMiddleware
from datetime import date,timedelta

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

site = WebsiteController()

site.register("oat@a","oat","0967459032","1234","customer")
site.register("tee@a","tee","0967459032","1234","lender")



# app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def index(request: Request):
    # return templates.TemplateResponse("index.html", {"request": request})
    pass

@app.get('/home')
def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.post('/home')
async def home(request : Request,token:TokenModel):
    token_input = token.token
    temp = site.check_token(str(token_input))
    try :
        if temp.role == "customer":
            return templates.TemplateResponse("customer_home.html", {"request": request, "token": token_input})
            # return RedirectResponse(url=f"/customer/home")
        elif temp.role == "lender":
            return templates.TemplateResponse("lender_home.html", {"request": request, "token": token_input})
            # return RedirectResponse(url=f"/lender/home")
    except:
        raise HTTPException(status_code=401, detail="Unauthorized")
        # return {"token": token_input,"check": temp}
# @app.get('/home.html')
# def home(token: str = Header(...)):
    
#     header_token = token
#     try :
#         temp = site.check_token(str(header_token))
#         if temp.role == "customer":
#             return RedirectResponse(url=f"/customer/home?token={header_token}")
#         elif temp.role == "lender":
#             return RedirectResponse(url=f"/lender/home?token={header_token}")
#     except:
#         return {"status": "None"}
    
    # return {"token": header_token}
    # return templates.TemplateResponse("home.html", {"request": Request, "token": header_token})
    # if header_token is None:
    #     return {"status": "None"}
    # else:
    #     temp = site.check_token(str(header_token))
    #     if temp.role == "customer":
    #         return RedirectResponse(url=f"/customer/home?token={token}")
    #     elif temp.role == "lender":
    #         return RedirectResponse(url=f"/lender/home?token={token}")
    # return RedirectResponse(url=f"/customer/home?token={header_token}")




# @app.get('/login.html')
# def login(request: Request):
#     return templates.TemplateResponse("login.html", {"request": request})

# @app.get('/login')
# def login(request: Request):
#     return templates.TemplateResponse("login.html", {"request": request})
#     pass

@app.post('/login')
# async def login(email: str, password: str):
async def login(login_data: LoginModel):
    email: str = login_data.email
    password: str = login_data.password
    log = site.login(email, password)
    if log == "Incorrect Password":
        raise HTTPException(status_code=201, detail="Incorrect Password")
    elif log == "Email not found":
        raise HTTPException(status_code=202, detail="Email not found")
    return {"status": "Login Successful","token": site.check_user(email).token, "role": site.check_user(email).user.role}

@app.get('/register')
def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.post('/register')
async def register(register_data: RegisterModel):
    email: str = register_data.email
    name: str = register_data.name
    phone_Number: str = register_data.phone_Number
    password: str = register_data.password
    role: str = register_data.role

    log = site.register(email, name, phone_Number, password, role)
    if log == "Registration Successful":
        return {"status": "Registration Successful","token": site.check_user(email).token}
        
    elif log == "User already exists":
        raise HTTPException(status_code=401, detail="User already exists")
    
    elif log == "Invalid Role":
        raise HTTPException(status_code=402, detail="Invalid Role")
    
    return {"status": "Registration Successful"}

@app.get("/api/customer", tags=["API"])
def get_all_customer():
    return {"Customers": {index: str(obj) for index, obj in enumerate(site.customer_list)}}

@app.get("/api/lender", tags=["API"])
def get_all_lender():
    return {"Lenders": {index: str(obj) for index, obj in enumerate(site.lender_list)}}

@app.get("/customer/home", tags =["Customer"])
def customer_home_page(request: Request, token: str):
    return templates.TemplateResponse("customer_home.html", {"request": request, "token": token})

@app.get("/reservations", tags=["Customer"])
def get_all_reservations_page(request: Request):
    return templates.TemplateResponse("reservations.html", {"request": request})

@app.post("/reservations", tags=["Customer"])
def get_all_reservations_page(customer_id:int) -> dict:
    for customers in site.customer_list:
        if customers.id == customer_id:
            temp = customers.reservations
            return {"Reservations": {index: str(obj) for index, obj in enumerate(temp)}}
    return {"Error":"Error"}

@app.get("/customer/{customer_id}/find_car", tags = ["Customer"])
def find_car_page(request:Request,customer_id: int):
    return templates.TemplateResponse("find_car.html", {"request":request, "customer_id": customer_id})

@app.get("/customer/{customer_id}/make_reservation", tags = ["Customer"])
def make_reservation_page(request: Request,customer_id:int):
    return templates.TemplateResponse("make_reservation.html", {"request": request, "customer_id": customer_id})

@app.post("/find_car")
async def find_car_post(request:Request, customer_id:int = Form(...), location:str = Form(...), start_date:date = Form(...), end_date:date = Form(...)):
    start = str(start_date).split("-")
    end = str(end_date).split("-")
    new_start = f"{start[2]}/{start[1]}/{start[0]}"
    new_end = f"{end[2]}/{end[1]}/{end[0]}"
    temp = site.check_available_car(location,new_start,new_end)
    return {"Available Car(s)" : {index: {"Car License": obj.license, "Price": obj.price} for index, obj in enumerate(temp)}}

@app.post("/make_reservation")
async def make_reservation_post(request: Request, customer_id:int = Form(...), license:str = Form(...), amount:int=Form(...),start_date:date = Form(...), end_date:date = Form(...)):
    for customers in site.customer_list:
        if customers.id == customer_id:
            for cars in site.car_list:
                if cars.license == license:
                    start = str(start_date).split("-")
                    end = str(end_date).split("-")
                    new_start = f"{start[2]}/{start[1]}/{start[0]}"
                    new_end = f"{end[2]}/{end[1]}/{end[0]}"
                    site.add_reservation(customers,cars,amount,new_start,new_end)
                    return {"Successful Reservation":{"From" : new_start, "To": new_end}}

@app.get("/lender/home", tags =["Lender"])
def lender_home_page(request: Request, token:str):
    return templates.TemplateResponse("lender_home.html", {"request": request, "token": token})

@app.get('/update_car', tags =["Lender"])
def update_car_page(request: Request):
    return templates.TemplateResponse("update_car.html", {"request": request})

@app.get("/lender/{lender_id}/add_car", tags =["Lender"])
def add_car_page(request:Request, lender_id:int):
    return templates.TemplateResponse("add_car.html", {"request": request, "lender_id": lender_id})

@app.get("/lender/{lender_id}/get_car_unavailable_dates", tags =["Lender"])
def get_car_unavailable_dates_page(request:Request, lender_id:int):
    return templates.TemplateResponse("get_car_unavailable_dates.html", {"request": request, "lender_id": lender_id})

@app.get("/lender/{lender_id}/car_list", tags=["Lender"])
def car_list(lender_id:int) -> dict:
    for lenders in site.lender_list:
        if lenders.id == lender_id:
            temp = lenders.lent_cars
            return {"Lent Cars": {index: {"license": obj.license, "status": obj.status, "price":obj.price, "location":obj.location} for index, obj in enumerate(temp)}}
    return {"Error"}

@app.post("/get_car_unavailable_dates", tags = ["Lender"])
async def get_car_unavailable_dates_post(request: Request,lender_id:int = Form(...), license: str = Form(...)):
    for cars in site.car_list:
        if cars.license == license:
            if cars.owner.id == lender_id:
                return {"Car Unavailable Dates" : {index: {"DAY" : obj.day, "MONTH": obj.month, "YEAR": obj.year} for index, obj in enumerate(cars.unavailable_dates)}}
    return {"Error"}

@app.post("/add_car", tags =["API"])
async def add_car_post(request: Request, lender_id: int = Form(...),license:str=Form(...), location: str = Form(...), price: int = Form(...)):
    for lenders in site.lender_list:
        if lenders.id == lender_id:
            temp = lenders.lend_car("AVAILABLE",license,location,price)
            site.car_list.append(temp)
            return {"Successful"}
    return {"Not Successful"}

@app.post("/update_car", tags =["API"])
async def update_car_post(request: Request, lender_id: int = Form(...), new_status: int = Form(...), license: str = Form(...)):
    if lender_id is None:
        return {"error": "Lender ID not provided"}
    if new_status != 1 and new_status != 0:
        return {"Not Successful"}
    for Lenders in site.lender_list:
        if(Lenders.id == lender_id):
            for Cars in Lenders.lent_cars:
                if (Cars.license == license):
                    Lenders.update_car_status(new_status,Cars)
                    return {"Car Status Changed to":Cars.status}
    return{"Not Successful"}

@app.get("/user", tags=["API"])
async def get_all_user():
    data = []
    for user in site.user_list:
        data.append({"email": user.email, "Name": user.name, "Phone_Number": user.phone_number, "Password": user.password, "Contact_info": user.contact_info, "Role": user.role , "Token": site.check_user(user.email).token})
    return data

@app.post("/get_user_token", tags=["API"])
async def get_user(request: Request, token:TokenModel):
    token_input:str = token.token
    # return {token: token_input}
    temp = site.check_token(str(token_input))
    return {"name":temp.name ,"plone_number":temp.phone_number,"role": temp.role}

# @app.get('/init')
# async def init_user():
#     init()
#     return {"status": "Init Successful"}
#     # return {site.user_list[0].email}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host    = "127.0.0.1",
        port    = 8000, 
        reload  = True
    )