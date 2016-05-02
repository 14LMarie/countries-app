angular.module('cocaApp')

// mainController, countriesCtrl, capitalCtrl
.controller('mainController', ['$scope', 'countryData', function ($scope, countryData) {}])


.controller('countriesCtrl', ['$scope', '$location', '$filter', 'countryData', '$q', function ($scope, $location, $filter, countryData, $q) {
    'use strict';

    var toString = Object.prototype.toString;

    $q.when(countryData.countries).then(function (result) {
        console.log(result.geonames);
        if (toString.call(countryData.countries) == '[object Object]') {
            countryData.countries = result.geonames;
        }
        $scope.countries = countryData.countries;
    });


}])

.controller('capitalCtrl', ['$scope', '$route', 'countryData', function ($scope, $route, countryData) {
    countryData.oneCountryService($route.current.params.countryCode).then(function (result) {
        $scope.country = result[0];
        console.log($scope.country);
    });

    countryData.capitalService($route.current.params.countryCode).then(function (result) {
        $scope.capital = result;
        $scope.capitalPopulation = $scope.capital.population;
    });

    countryData.neighbourService($route.current.params.countryCode).then(function (result) {
        $scope.neighbors = result.geonames;
    });
    $scope.flag = $route.current.params.countryCode.toLowerCase();
    $scope.map = $route.current.params.countryCode;

    }]);
