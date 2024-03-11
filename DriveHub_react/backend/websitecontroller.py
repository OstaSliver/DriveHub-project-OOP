from user import User,Customer,Lender
from uuid import uuid4

rand_token = uuid4()

class Token:
    def __init__(self,user,token):
        self.__User: User = user
        self.__token: str = token

    @property
    def token(self):
        return self.__token
    
    @property
    def user(self):
        return self.__User
    
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
        self.__token_list = []

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
    
    @property
    def token_list(self):   
        return self.__token_list
    
    def register(self, email, Name, Phone_Number, Password, Role):

        for user in self.user_list:
            if user.email == email:
                return "User already exists"
            
        token = uuid4()
        # user = User(email, Name, Phone_Number, Password, Role,token)
        if (Role == "customer"):

            customer = Customer(email, Name, Phone_Number, Password)
            user = User(email, Name, Phone_Number, Password)
            user.role = "customer"
            token_data = Token(user,token)
            self.customer_list.append(customer);
            self.token_list.append(token_data)
            self.user_list.append(user)

        elif (Role == "lender"):

            lender = Lender(email, Name, Phone_Number, Password)
            user = User(email, Name, Phone_Number, Password)
            user.role = "lender"

            token_data = Token(user,token)
            self.token_list.append(token_data)
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

    def check_token(self,token) -> User:
        # log ={}
        # log['tokenInput'] = token
        # log['count'] = len(self.__token_list)
        # log['tokenAll'] =[str(tokens.token) for tokens in self.token_list]
        for tokens in self.token_list:
            if str(tokens.token) == str(token):
                # log['user'] = tokens.user
                # return log
                return tokens.user
        # return {"status": "Token not found"}
        # return log
        
    
    def check_user(self,email):

        for token in self.__token_list:
            if token.user.email == email:
                return token
        return 1
    
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
