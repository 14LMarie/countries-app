viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries", {
        templateUrl: "./countries/countries.html",
        controller: 'CountriesCtrl'
    });
}]);

viewsModule.controller('CountriesCtrl', ['$scope', 'countryService', function ($scope, countryService) {
    $scope.countryResult = [];

    $scope.countryResult.push(new countryService('country'));
    console.log($scope.countryResult.geonames);

}]);
