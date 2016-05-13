describe("cocaApp", function () {
    beforeEach(module("cocaApp"));

    describe("/countries route", function () {
        it('should load the template, controller',
            inject(function ($location, $rootScope, $httpBackend, $route) {
                $httpBackend.whenGET('./partials/countries.html').respond('...');

                $rootScope.$apply(function () {
                    $location.path('/countries');
                });
                $httpBackend.flush();
                expect($route.current.controller).toBe("countriesCtrl");
                expect($route.current.loadedTemplateUrl).toBe("./partials/countries.html");
                $httpBackend.verifyNoOutstandingRequest();

            }));
    });


    describe('countriesCtrl', function () {

        var controller = null;
        $scope = null;

        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            controller = $controller('countriesCtrl', {
                $scope: $scope,
                countryData: function () {
                    return true;
                }
            });
        }));

        it('should return an array of data from the server', function () {
            expect($scope.predicate).toBe("countryName");
        });

    });
});
