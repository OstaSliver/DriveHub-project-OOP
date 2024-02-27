class User:
    def __init__(self, email, Name, Phone_Number, Password, Contact_info, Role):
        self.__email = email
        self.__Name = Name
        self.__Phone_Number = Phone_Number
        self.__Password = Password
        self.__Contact_info = Contact_info
        self.__Role = Role

    @property
    def email(self):
        return self.__email

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
