/*describe("cocaApp", function () {
    beforeEach(module('cocaApp'));
    describe('countriesCtrl', function () {
        var ctrl, scope;
        beforeEach(inject(function ($controller, $rootscope) {
            scope = $rootscope.$new();
            ctrl = $controller('countriesCtrl', {
                $scope: scope,
                countryData: function () {
                    return true;
                }
            });
        }));
        it('should return an array of data from the server', function () {
            expect(scope.countries).toBe("countryName");
        });
    });
});*/

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
});
