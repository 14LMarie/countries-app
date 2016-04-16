//api calls
angular.module('cocaLibrary', [])
    .factory('countryService', function ($http, $q) {
        //gets data for all countries
        var allCountryService = function (country) {
            this.initalize = function () {
                var defer = $q.defer();
                var username = 'lmteague';
                var urlBase = 'http://api.geonames.org/' + 'countryInfoJSON';
                var request = {
                    callback: 'JSON_CALLBACK',
                    username: username
                };
                var self = this;
                $http({
                        method: 'JSONP',
                        url: urlBase,
                        params: request,
                        cache: true

                    })
                    .success(function (data, status, headers, config) {
                        if (typeof data.status == 'object') {
                            console.log("Error" + data.status.message + "'");
                            defer.reject(data.status);
                        } else {
                            defer.resolve(data);
                        }
                        /*console.log(response.data.geonames);
                        $.each(response.data.geonames, function (key, value) {
                            console.log(value.capital)
                        });*/
                    })

                .error(function (data, status, headers, config) {
                    console.log(status + "error attempting to access geonames.org.");
                    defer.reject()
                });
                return defer.promise;
            };
            this.initalize();
        };
        return (allCountryService);
        //data for each country individually
        var oneCountryService = function () {
            this.initialize = function () {

            }
        }

        //data for the neighbours of a country
        var neighbourService = function (countryCode) {
            this.initalize = function () {
                var defer = $q.defer();
                var username = 'lmteague';
                var urlBase = 'http://api.geonames.org/' + 'neighboursJSON';
                var request = {
                    callback: 'JSON_CALLBACK',
                    country: countryCode,
                    username: username
                };
                var self = this;
                $http({
                        method: 'JSONP',
                        url: urlBase,
                        params: request,
                        cache: true
                    })
                    .success(function (data, status, headers, config) {
                        defer.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        console.log(status + "error attempting to access geonames.org.");
                    });
                return defer.promise;
            };
            this.initalize();
        };
        return (neighbourService);
    });


/*var countryService = function (country) {
        this.initialize = function () {
            var username = 'lmteague';
            var urlBase = 'http://api.geonames.org/';
            var request = {
                method: 'JSONP',
                url: url +
            }
            // Fetch the player from Dribbble
            var url = 'http://api.geonames.org/countryInfo?username=' + username;
            var playerData = $http.jsonp(url);


            console.log(playerData);
            var self = this;

            // When our $http promise resolves
            // Use angular.extend to extend 'this'
            // with the properties of the response
            playerData.then(function (response) {
                angular.extend(self, response.data);
            });
        };

        // Call the initialize function for every new instance
        this.initialize();
    };

    // Return a reference to the function
    return (countryService);
});*/
