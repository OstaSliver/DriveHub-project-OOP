from car import Car
class User:
    # def __init__(self, email, Name, Phone_Number, Password, Contact_info, Role):
    #     self.__email = email
    #     self.__Name = Name
    #     self.__Phone_Number = Phone_Number
    #     self.__Password = Password
    #     self.__Contact_info = Contact_info
    #     self.__Role = None
    #     self.__token = None

    def __init__(self, email, name, phone_number, password,token):
        self.__email = email
        self.__name = name
        self.__phone_number = phone_number
        self.__password = password
        self.__contact_info = None
        self.__role = None
        self.__token = token

    @property
    def email(self):
        return self.__email

    @property
    def name(self):
        return self.__name
    
    @property
    def phone_number(self):
        return self.__phone_number
    @property
    def password(self):
        return self.__password
    @property
    def contact_info(self):
        return self.__contact_info
    
    @property
    def role(self):
        return self.__role
    
    @role.setter
    def role(self,role):
        self.__role = role
    
    @property
    def token(self):
        return self.__token
    
    def create_customer(self):
        pass

    def create_lender(self):
        pass

    def review(self):
        pass

    def check_existing_user(self):
        pass

    def check_user(self):
        pass

class Customer(User):
    def __init__(self,id,name,phone_number,password,token):
        super().__init__(id,name,phone_number,password,token)
        self.__reservations = []
    def view_reservations(self):
        return self.__reservations
    def add_reserves(self, reservation):
        self.reservations.append(reservation)

class Lender(User):
    def __init__(self,id,name,phone_number,password,token):
        super().__init__(id,name,phone_number,password,token)
        self.__lent_cars = []
    

    @property
    def lent_cars(self):
        return self.__lent_cars
    
    def lend_car(self,status,license,locaation,price,site):
        temp = Car(status,license,self,locaation,price)
        self.lent_cars.append(temp)
        site.car_list.append(temp)
    def update_car_status(self,updated_status,car_instance):
        if (self == car_instance.owner):
            if updated_status == 0:
                car_instance.change_status("NOT AVAILABLE")
            elif updated_status == 1:
                car_instance.change_status("AVAILABLE")

