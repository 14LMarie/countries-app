angular.module('cocaApp', ['dataLibrary', 'Data', 'ngRoute', 'ngAnimate'])

.config(['$locationProvider', '$routeProvider',
             function ($locationProvider, $routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "./partials/home.html"
            })
            .when("/countries", {
                templateUrl: "./partials/countries.html",
                controller: "countriesCtrl",
            })
            .when("/countries/:countryCode", {
                templateUrl: "./partials/capital.html",
                controller: "capitalCtrl",
            })
            .otherwise({
                redirectTo: '/home'
            });
             }]);
