from typing import Optional
from fastapi import FastAPI
import uvicorn
from datetime import date,timedelta

class WebsiteController:
    def __init__(self):
        self.__user_list = []
        self.__customer_list = []
        self.__lender_list = []
        self.__reservation_list = []
        self.__car_list = []

    @property
    def user_list(self):
        return self.__user_list
    @property
    def customer_list(self):
        return self.__customer_list
    @property
    def lender_list(self):
        return self.__lender_list
    @property
    def reservation_list(self):
        return self.__reservation_list
    @property
    def car_list(self):
        return self.__car_list
    
    def add_reservation(self,user,car,amount,start_date,end_date):
        reservation_dates = [start_date,end_date]
        temp = start_date.split("/")
        date1 = date(int(temp[2]),int(temp[1]),int(temp[0]))
        temp = end_date.split("/")
        date2 = date(int(temp[2]),int(temp[1]),int(temp[0]))
        delta = date2-date1
        for i in range(delta.days + 1):
            a = date1 + timedelta(days=i)
            b = str(a)
            splitted = b.split("-")
            r_date = DMY(int(splitted[2]),int(splitted[1]),int(splitted[0]))
            car.unavailable_dates.append(r_date)
        reserve = Reservation(user,car,amount,start_date,end_date)
        self.reservation_list.append(reserve)
        return reserve

    def add_user(self,id,name,phone_number,password):
        self.user_list.append(User(id,name,phone_number,password))
    def add_lender(self,id,name,phnume_number,password):
        lender_instance = Lender(id,name,phnume_number,password)
        self.lender_list.append(lender_instance)
        return lender_instance
    def add_customer(self,id,name,phnume_number,password):
        customer_instance = Lender(id,name,phnume_number,password)
        self.lender_list.append(customer_instance)
        return customer_instance
    
    def remove_car(self, car_license):
        for cars in self.car_list:
            if cars.license == car_license:
                for lenders in self.lender_list:
                    if lenders == cars.owner:
                        self.car_list.remove(cars)

    def check_available_car(self, location, start_date, end_date):
        available_car = []
        temp = start_date.split("/")
        start = DMY(int(temp[0]),int(temp[1]),int(temp[2]))
        temp = end_date.split("/")
        end = DMY(int(temp[0]),int(temp[1]),int(temp[2]))

        for car in self.car_list:
            if car.location == location:
                if car.status == "AVAILABLE":
                    for date in car.unavailable_dates:
                        if date.year == start.year and date.month == start.month:
                            if date.day >= start.day and date.day <= end.day:
                                break
                        else:
                            available_car.append(car)
        return available_car
    
class Reservation:
    def __init__(self,user,car,amount,start_date,end_date):
        self.__user = user
        self.__car = car
        self.__amount = amount
        self.__start_date = start_date
        self.__end_date = end_date

class User:
    def __init__(self,id,name,phone_number,password):
        self.__id = id
        self.__name = name
        self.__phone_number = phone_number
        self.__password = password

class Customer(User):
    def __init__(self,id,name,phone_number,password):
        super().__init__(id,name,phone_number,password)
        self.__reservations = []
    def view_reservations(self):
        return self.__reservations
    def add_reserves(self, reservation):
        self.reservations.append(reservation)

class Lender(User):
    def __init__(self,id,name,phone_number,password):
        super().__init__(id,name,phone_number,password)
        self.__lent_cars = []


    @property
    def lent_cars(self):
        return self.__lent_cars
    
    def lend_car(self,status,license,locaation,price):
        temp = Car(status,license,self,locaation,price)
        self.lent_cars.append(temp)
        site.car_list.append(temp)
    def update_car_status(self,updated_status,car_instance):
        if (self == car_instance.owner):
            if updated_status == 0:
                car_instance.status = "NOT AVAILABLE"
            elif updated_status == 1:
                car_instance.status = "AVAILABLE"
        
class Car:
    def __init__(self,status,license,owner,location,price):
        self.__status = status
        self.__license = license
        self.__owner = owner
        self.__location = location
        self.__price = price
        self.__unavailable_dates = []
    def ReserveDate(self,day,month,year):
        self.unavailable_dates.append(DMY(day,month,year))

    @property
    def status(self):
        return self.__status
    
    @property
    def license(self):
        return self.__license
    
    @property
    def owner(self):
        return self.__owner

    @property
    def location(self):
        return self.__location
    
    @property
    def price(self):
        return self.__price
    
    @property
    def unavailable_dates(self):
        return self.__unavailable_dates


class DMY:
    def __init__(self,day,month,year):
        self.__day = day
        self.__month = month
        self.__year = year

    @property
    def day(self):
        return self.__day
    @property
    def month(self):
        return self.__month
    @property
    def year(self):
        return self.__year

#####TEST CODE START

# zeroday = DMY(0,0,0)
site = WebsiteController()
me = site.add_lender(123,"Tee","0649494466","1234")
me.lend_car("AVAILABLE","AB123","BACK_HOME","10")
me1 = site.add_customer(124,"Eet","012345678","1234")
# print(me.LentCars)
mycar = me.lent_cars[0]
# mycar.unavailable_dates.append(zeroday)
# print(mycar.Status)
# me.UpdateCarStatus("NOT LENT",mycar)
# print(mycar.Status)
site.add_reservation(me,mycar,1000,"1/1/1","3/1/1")
# print(mycar.unavailable_dates)
for i in mycar.unavailable_dates:
    # print(i.day)
    # print(i.month)
    # print(i.year)
    print(i)
print(site.check_available_car("BACK_HOME","1/1/1","3/1/1"))

####TEST CODE END


# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"Hello": "eiei"}

# @app.get("/cars")
# def update_car(OwnerID: int,NewStatus: int,License: str):
#     if NewStatus != 1 and NewStatus != 0:
#         return {"Not Successful"}
#     for Lenders in site.lender_list:
#         if(Lenders.id == OwnerID):
#             for Cars in Lenders.lent_cars:
#                 if (Cars.license == License):
#                     Lenders.update_car_status(NewStatus,Cars)
#                     return {"Car Status Changed to":Cars.status}
#     return{"Not Successful"}

# # @app.get("/cars")
# # def getCarStatus()

# if __name__=="__main__":
#     uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")