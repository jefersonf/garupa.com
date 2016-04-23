from core.src.Notification import Notification

from datetime import datetime

class RideRequestNotification(Notification):

    def __init__(self, ride, associatedUser):
        Notification.__init__(self, {
        		'ride' : ride.getView()
                        'user' : associatedUser.getPublicoView()
        	})

        self._ride = ride
        self._associatedUser = associatedUser

    def getRide(self):
        return self._ride

    def getAssociatedUser(self):
        return self._associatedUser

    def getType(self):
        return 'RIDEREQUESTNOTIFICATION'

