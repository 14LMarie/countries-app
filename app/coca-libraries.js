//api calls
angular.module('cocaLibrary', [])
    .factory('countryService', function ($http) {
        var countryService = function (country) {
            this.initalize = function () {
                var username = 'lmteague';
                var urlBase = 'http://api.geonames.org/';
                var request = {
                    callback: 'JSON_CALLBACK',
                    username: username
                };
                var self = this;
                $http({
                        method: 'JSONP',
                        url: urlBase + "countryInfoJSON",
                        params: request

                    })
                    .then(function (data, status, headers, config) {
                            console.log('Success!' + data);
                            //countryService.then(function (response) {
                            angular.extend(self, data);
                            //});
                        },
                        function (data, status, headers, config) {
                            console.log('failure');
                        });
            };
            this.initalize();
        };
        return (countryService);
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
