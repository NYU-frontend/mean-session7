var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
        $scope.message = "Hello World";
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope',
    function ShowCtrl($scope) {
        $scope.message = "Show The World";
    }]);

helloWorldControllers.controller('404Ctrl', ['$scope',
    function 404Ctrl($scope) {
        $scope.message = "404 - you are lost!";
    }]);