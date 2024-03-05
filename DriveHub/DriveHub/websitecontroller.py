from user import User

class WebsiteController:
    def __init__(self):
        self.User_list = []
        self.Brand_list = []
        self.Car_list = []
        self.Reservation_list = []
        self.Car_reserved_date_list = []
        self.Review_list = []
        self.Payment_list = []
        self.Waiting_for_approval_car_lost = []

    def register(self, email, Name, Phone_Number, Password, Role):
        for user in self.User_list:
            if user.email == user.email:
                return "User already exists"
        user = User(email, Name, Phone_Number, Password, Role)
        
        self.User_list.append(user)
        return "Registration Successful"
        
        pass
    def login(self, email, password):
        for user in self.User_list:
            if user.email == email and user.password == password:
                return "Login Successful"
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

    @property
    def user_list(self):
        return self.User_list