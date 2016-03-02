(function () {
    'use strict';

    angular.module('babylon', [
        'ngRoute',
        'babylon.core',
        'babylon.booking',
        'babylon.intro'
    ]).config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'src/client/app/intro/intro.html',
                controller: 'IntroController',
                controllerAs: 'intro'
            })
           .when('/booking', {
               templateUrl: 'src/client/app/booking/booking.html',
               controller: 'BookingController',
               controllerAs: 'booking'
           })
            .otherwise({
                redirectTo: '/'
            });
    });
})();
