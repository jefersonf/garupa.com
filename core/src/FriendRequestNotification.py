from Notification import Notification

from datetime import datetime

class FriendRequestNotification(Notification):

    def __init__(self, associatedUser):
        Notification.__init__(self, associatedUser.getPublicView())

        self._associatedUser = associatedUser

    def getAssociatedUser(self):
    	return self._associatedUser

    def getType(self):
        return 'FRIENDREQUESTNOTIFICATION'
