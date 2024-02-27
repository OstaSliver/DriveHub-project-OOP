from fastapi import FastAPI, Request , HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
import uvicorn

from user import User

from websitecontroller import WebsiteController

from fastapi.staticfiles import StaticFiles

app = FastAPI()

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")


# @app.get('/')
# def index(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})
websiteController = WebsiteController()

@app.get("/")
async def docs():
    return RedirectResponse("/docs")

@app.post("/register" , tags=["auth"])
async def register(registerinfo:Registerinfo):
    name = registerinfo.name
    phone = registerinfo.phone
    password = registerinfo.password
    contact_info = registerinfo.contact_info
    role = registerinfo.role
    user = User(name, phone, password, contact_info, role)
    user.create_user()
    
# Endpoint to return the todo list
@app.get("/todo")
async def get_todo_list():
    return todo_list

# Post -- > Create Todo
@app.post("/todo", tags=["Todos"])
async def add_todo(todo: dict) -> dict: 
    todo_list.append(todo)
    return todo_list

# Endpoint to edit an existing Activity in the todo list
@app.put("/todo/{id}")
def edit_activity(id: int, activity: dict):
    for item in todo_list:
        if item["id"] == id:
            item["activity"] = activity["activity"]
            return {"message": "Activity updated successfully"}
    raise HTTPException(status_code=404, detail="Activity not found")

# Endpoint to delete a activity from the todo list
@app.delete("/todo/{id}")
def delete_activity(id: int):
    for index, item in enumerate(todo_list):
        if item["id"] == id:
            del todo_list[index]
            return {"message": "Activity deleted successfully"}
    raise HTTPException(status_code=404, detail="Activity not found")

if __name__ == "__main__":
    
    uvicorn.run(
        "app:app",
        host    = "127.0.0.1",
        port    = 8000, 
        reload  = True
    )