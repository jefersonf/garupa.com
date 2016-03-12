
app.service('Users', function(Day, Way) {

    function Ride(time, day, way, driver, vacancies) {
        this.time = time;
        this.day = day;
        this.driver = driver;
        this.way = way;
        this.vacancies = vacancies;
    }

    function User(id, password) {
        var self = this;

        this.id = id;
        this.password = password;
        this.email = null;

        this.name = undefined;
        this.phone = undefined;
        this.address = undefined;
        this.photo_url = 'https://lh3.googleusercontent.com/-yysr8_T4r7k/AAAAAAAAAAI/AAAAAAAAAAA/EnhQ3HVLDok/photo.jpg';

        this.rides = new Array();
        this.friends = new Array();

        this.addRide = function(time, day, way, driver) {
            self.rides.push(new Ride(time, day, way, driver));
        }

        this.addFriend = function(user) {
            self.friends.push(user);
        }

        this.removeFriend = function(user) {
            self.friends = _.without(self.friends, user);
        }

        this.hasFriend = function(user) {
            return _.contains(self.friends, user)
        }
    };

    // Fake users

    var user1 = new User('dilma', 'votempt');
    var user2 = new User('einstein', 'loacepeso');
    var user3 = new User('safadao', 'soasnovinhas');

    var user_list = [
        user1, user2, user3
    ];

    user1.addFriend(user2);
    user2.addFriend(user1);
    user3.addFriend(user2);

    user1.name = 'Dilma Rousseff';
    user2.name = 'Albert Einstein';
    user3.name = 'Wesley Safadão';

    user1.email = 'dilmona@presidente.br';
    user2.email = 'albert@ciencia.e.mc2';
    user3.email = 'garota@safada.voce';

    user1.phone = '(13) 1313-1313';
    user2.phone = '(18) 6736-2672';
    user3.phone = '(82) 9372-4408';

    user1.address = 'Alto Branco';
    user2.address = 'Catole';
    user3.address = 'Seu coração';

    user1.photo_url = 'http://static2.blastingnews.com/media/photogallery/2016/2/23/290x290/b_290x290/salario-de-dilma-devera-ser-reduzido_615715.jpg';
    user2.photo_url = 'https://pbs.twimg.com/profile_images/435830531951837184/Z50DeEtx.jpeg';
    user3.photo_url = 'https://40.media.tumblr.com/20625bfafa453b4d628f7de4a5d7e14e/tumblr_nz7u21Qai41t4osjeo2_250.png';

    user1.addRide(1000, Day.SUN, Way.FROM, user2, 3);
    user1.addRide(730, Day.SUN, Way.TO, user1, 2);
    user1.addRide(800, Day.MON, Way.TO, user2, 4);
    user1.addRide(800, Day.TUE, Way.FROM, user3, 5);
    user1.addRide(1130, Day.THU, Way.TO, user1, 1);
    user1.addRide(730, Day.THU, Way.FROM, user2, 0);
    user1.addRide(730, Day.SAT, Way.TO, user3), 1;
    user1.addRide(1300, Day.SUN, Way.FROM, user2, 4);
    user1.addRide(500, Day.SUN, Way.TO, user1, 5);

    user2.addRide(500, Day.TUE, Way.TO, user1, 2);

    // End fake users

    this.loggedUser = null;

    this.login = function(uid) {
        return this.loggedUser = this.get(uid);
    };

    this.logout = function() {
        return this.loggedUser = null;
    };

    this.areFriends = function(user1, user2) {
        if(user1 == null || user2 == null) return false;
        return user1.hasFriend(user2) && user2.hasFriend(user1);
    };

    this.get = function(uid) {
        return _.find(user_list, function(user) {
            return user.id === uid;
        });
    };

    this.getAll = function() {
        return user_list;
    };
});