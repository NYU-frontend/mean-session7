var helloWorldApp = angular.module('helloWorldApp', 
    [
    'ngRoute',   
    'helloWorldControllers' 
    ]);

helloWorldApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        }).otherwise({ 
            templateUrl: 'partials/404.html',
            controller: '404Ctrl'
        });
    }]);
