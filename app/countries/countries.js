viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries", {
        templateUrl: "./countries/countries.html",
        controller: 'CountriesCtrl'
    });
}]);

viewsModule.controller('CountriesCtrl', ['$scope', 'countryService', function ($scope, countryService) {
    var country = new countryService('data');
}]);
