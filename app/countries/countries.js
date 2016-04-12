viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries", {
        templateUrl: "./countries/countries.html",
        controller: 'CountriesCtrl'
    });
}]);

viewsModule.controller('CountriesCtrl', function ($scope, countryService) {
    $scope.countries = [];

    $scope.countries.push(new countryService(this));
    //console.log(countryResult.geonames);
    console.log($scope.countries[0].capital);
});
