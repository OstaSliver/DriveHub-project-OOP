from user import User,Customer,Lender
from uuid import uuid4

rand_token = uuid4()
class WebsiteController:
    def __init__(self):
        # self.User_list = []
        # self.Brand_list = []
        # self.Car_list = []
        # self.Reservation_list = []
        # self.Car_reserved_date_list = []
        # self.Review_list = []
        # self.Payment_list = []
        # self.Waiting_for_approval_car_lost = []

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
    
    def register(self, email, Name, Phone_Number, Password, Role):

        for user in self.user_list:
            if user.email == email:
                return "User already exists"
            
        token = uuid4()
        # user = User(email, Name, Phone_Number, Password, Role,token)
        if (Role == "customer"):
            customer = Customer(email, Name, Phone_Number, Password,token)
            user = User(email, Name, Phone_Number, Password,token)
            user.role = "customer"

            self.customer_list.append(customer);
            self.user_list.append(user)
            
        elif (Role == "lender"):
            lender = Lender(email, Name, Phone_Number, Password,token)
            user = User(email, Name, Phone_Number, Password,token)
            user.role = "lender"

            self.lender_list.append(lender)
            self.user_list.append(user)
        else:
            return "Invalid Role"
        
        return "Registration Successful"
        
        pass
    def login(self, email, password):
        for user in self.user_list:
            if user.email == email and user.password == password:
                return user
            elif user.email == email and user.password != password:
                return "Incorrect Password"
        return "Email not found"


    def add_car(self):
        pass

    def remove_car(self):
        pass

    def approve_car(self):
        pass

    def add_reservation(self):
        pass

    def add_history(self):
        pass

    def update_car_status(self):
        pass

    def pay_lender(self):
        pass

    def add_brand(self):
        pass

    def pay_back_deposit(self):
        pass

    def check_available_car(self):
        pass

    def get_payment(self):
        pass

    def view_reservation(self):
        pass
