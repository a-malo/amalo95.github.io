'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/splash', {
        templateUrl: 'splash/splash.html'
    });
}])

.controller('SplashCtrl', [function () {

}]);