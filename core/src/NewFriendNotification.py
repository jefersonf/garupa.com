from Notification import Notification

from datetime import datetime

class NewFriendNotification(Notification):

    def __init__(self, associatedUser):
        Notification.__init__(self, associatedUser.getPublicView())

        self._associatedUser = associatedUser

    def getType(self):
        return 'NEWFRIENDNOTIFICATION'

    def getAssociatedUser(self):
    	return self._associatedUser
