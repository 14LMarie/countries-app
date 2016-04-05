angular.module('cocaApp', ['cocaAppViews', 'ngRoute', 'ngAnimate'])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
