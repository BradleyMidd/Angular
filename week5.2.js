var app = angular.module('mijnEventApp', []);

app.controller('mijnEventController', function ($scope) {

    $scope.klik = 0;
    $scope.dbklik = 0;
    $scope.muisIn = 0;
    $scope.muisUit = 0;

    $scope.clicker = function () {
        $scope.klik++;
    }

    $scope.dblclick = function () {
        $scope.dbklik++;
    }

    $scope.mouseenter = function(){
        $scope.muisIn++;
    }

    $scope.mouseout = function (){
        $scope.muisUit++;
    }

    $scope.trackMouse = function (event) {
        $scope.x = event.clientX;
        $scope.y = event.clientY;
    }
});