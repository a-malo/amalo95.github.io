'use strict';

// This is the main module of the Application. Dependencies are listed in the brackets.
angular.module('myApp', ['ngRoute'])
    //This routeProvider redirects to home if an invalid page is requested
// app.config(['$routeProvider', function ($routeProvider) {
//         $routeProvider.otherwise({
//             redirectTo: '/splash'
//         });
//     }]);
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/splash', {
        templateUrl: 'splash/splash.html'
    }).otherwise({
            redirect: '/splash'
    });
}]);

