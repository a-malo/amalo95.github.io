'use strict';

// This is the main module of the Application. Dependencies are listed in the brackets.
var app = angular.module('myApp', ['ngRoute']);
    //This routeProvider redirects to home if an invalid page is requested
// app.config(['$routeProvider', function ($routeProvider) {
//         $routeProvider.otherwise({
//             redirectTo: '/splash'
//         });
//     }]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/default', {
                templateUrl: 'splash/splash.html',
                controller : 'SplashCtrl'
            }).when('/adminMenu/:username', {
                templateUrl: 'HTML/adminMenu.html',
                controller : 'adminMenu'
            }).otherwise({
                redirectTo : '/default'
            });
}]);


