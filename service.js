var app = angular.module('mijnApp', []);

app.controller('mijnController', function ($scope, $http) {

    $http.get("personen.json").then(function (response) {

        $scope.mijnOpgehaaldeData = response.data;
    });
});