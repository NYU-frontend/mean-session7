var helloWorldApp = angular.module('helloWorldApp', ['ngRoute', 'helloWorldControllers']);

helloWorldApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        });
    }]);