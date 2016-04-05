viewsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/countries/:country/capital", {
        templateUrl: "./capital/capital.html",
        controller: 'CapitalCtrl'
    });
}]);

viewsModule.controller('CapitalCtrl', ['$scope', 'dependency', function () {
    //code to execute
}]);
