'use strict';

angular.module('myApp.info', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/info', {
        templateUrl: 'components/info/info.html'
    });
}])

.controller('InfoCtrl', [function () {

}]);