import datetime

class Ride:

    # variavel estatica
    rid_counter = 1

    def __init__(self, driver, numberOfVacancies, route, toUFCG=False, date=datetime.datetime.now(), weekly=False):

        self._driver = driver
        self._numberOfVacancies = numberOfVacancies
        
        self._rid = Ride.rid_counter
        Ride.rid_counter += 1
    
        self._date = date
        self._weekly = weekly
        self._toUFCG = toUFCG

        self._passengers = []
        self._route = route

    def addPassenger(self, passenger, address):
        if not self.isFull() and passenger != self._driver and not self.containsPassenger(passenger):
            self._passengers.append((passenger, address))

    def removePassenger(self, passenger):
        old_size = self.getNumberOfPassengers()

        self._passengers = [p for p in self._passengers if p[0] != passenger]
        return old_size != self.getNumberOfPassengers()
    
    def getNumberOfPassengers(self):
        return len(self._passengers)

    def containsPassenger(self, user):
        for passenger in self._passengers:
            if passenger[0] == user: return True
        return False
    
    def isFull(self):
        return (self.getNumberOfPassengers() == self.getNumberOfVacancies())

    def __eq__(self, otherRide):
	if type(otherRide) != Ride: return False
        return self.getRid() == otherRide.getRid()
        
    def weekly_update(self):
        sunday = self.getLastSunday()
        ride_date = self.getDate()

        if ride_date < sunday and self.isWeekly():
            new_date = ride_date + datetime.timedelta(weeks=1)
            self._date = new_date
            return True
        return False

    def getLastSunday(self):
        today = datetime.datetime.today().toordinal()
        week_day = datetime.datetime.today().isoweekday() % 7
        return datetime.datetime.fromordinal(today - week_day)

    def isInTheRoute(self, district):
    	return district in self._route

    # caso precise desses metodos
    def addNeighborhoodToRoute(self, neighborhood):
        if neighborhood not in self._route:
            self._route.append(neighborhood)

    def removeNeighborhoodFromRoute(self, neighborhood):
        old_size = len(self._route)

        self._passengers = [r for r in self._route if r != neighborhood]
        return old_size != len(self._route)

    """ Set and Get functions """

    def getDate(self):
        return self._date

    def getReadableDate(self):
        return datetime.datetime.strftime(self._date, '%d-%m-%Y')

    def getDriver(self):
        return self._driver

    def isWeekly(self):
        return self._weekly

    def setWeekly(self, weekly):
        self._weekly = weekly

    def getNumberOfVacancies(self):
        return self._numberOfVacancies

    def setNumberOfVacancies(self, numberOfVacancies):
        self._numberOfVacancies = numberOfVacancies

    def getPassengers(self):
        return self._passengers

    def getRid(self):
        return self._rid

    def getToUFCG(self):
        return self._toUFCG
    
    def setToUfcg(self, toUFCG):
        self._toUFCG = toUFCG

    def getRoute(self):
        return self._route

    """ Get view """

    def getView(self):
        result = {}
        result['weekly'] = self.isWeekly()
        result['date'] = str(self.getDate())
        result['driver'] = self.getDriver().getName()
        result['number_of_vacancies'] = self.getNumberOfVacancies()
        for passenger in self.getPassengers():
            result['passengers'].append(passenger.getName())
        result['route'] = self.getRoute()
        return result
