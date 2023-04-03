var app = angular.module('mijnEventApp', []);

app.controller('mijnEventController', function ($scope) {

    $scope.count = 0;

    $scope.clicker = function () {
        $scope.count++;
    }
});