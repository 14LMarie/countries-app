angular.module('cocaApp')

// mainController, countriesCtrl, capitalCtrl
.controller('mainController', ['$scope', 'countryData', function ($scope, countryData) {}])


.controller('countriesCtrl', ['$scope', '$location', '$filter', 'countryData', '$q', function ($scope, $location, $filter, countryData, $q) {
    'use strict';
    $scope.countries = countryData;
    $.each(countryData.countries, function (key, value) {
        console.log(countryData.countries);
    })


    //console.log('I am in countries controller');
    /* $scope.countries = [];

     $scope.countries.push(new allCountryService(this));

     console.log($scope.countries[0].capital);*/


}])

.controller('capitalCtrl', ['$scope', '$route', 'countryData', function ($scope, $route, countryData) {
    console.log('I am in capital controller');
    }])
