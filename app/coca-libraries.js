//api calls
angular.module('cocaLibrary', [])
    .factory('countryService', function ($http) {
        var countryService = function (country) {
            this.initialize = function () {
                var username = 'lmteague';
                var urlBase = 'http://api.geonames.org/';
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
    });
