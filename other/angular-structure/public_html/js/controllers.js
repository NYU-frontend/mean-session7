'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);

// $location  --  https://docs.angularjs.org/guide/$location
// $http  --  https://docs.angularjs.org/api/ng/service/$http

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.pageClass = 'page-home';
        $scope.message = "Hello World";
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.pageClass = 'page-about';
        $scope.message = "Show The World";
    }]);

helloWorldControllers.controller('404Ctrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.pageClass = 'page-contact';
        $scope.message = "404 page";
    }]);