from DMY import DMY
class Car:
    def __init__(self,status,license,owner,location,price):
        self.__status = status
        self.__license = license
        self.__owner = owner
        self.__location = location
        self.__price = price
        self.__unavailable_dates = []

    def reserve_date(self,day,month,year):
        self.unavailable_dates.append(DMY(day,month,year))
    
    def change_status(self,new_status):
        self.__status = new_status

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
