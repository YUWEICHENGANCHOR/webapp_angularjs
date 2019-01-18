'use strict';

angular.module('app').controller('positionCtrl',['$http','$state','$scope', function($http,$scope,$state){
    $scope.isLogin = false;
    $http({
        method:'GET',
        url:'/data/position.json'
    }).then(function(res){
        $scope.position = res;
        console.log(position);
    })
}]);
