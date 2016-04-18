angular.module('Data', [])

.factory('countryData', ['dataFactory', function (dataFactory) {
    var countryData = {};

    countryData.countries = dataFactory.allCountryService();
    countryData.oneCountryService = dataFactory.oneCountryService;
    countryData.capitalService = dataFactory.capitalService;
    countryData.neighbourService = dataFactory.neighbourService;
    return countryData;
    }]);
