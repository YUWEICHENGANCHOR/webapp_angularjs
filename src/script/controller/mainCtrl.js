'use strict';

angular.module('app').controller('mainCtrl',['$http','$scope', function($http,$scope){
    $http({
        method: 'GET',
        url: '/data/positionList.json'
    }).then(function(res){
        $scope.list = res;
    })
   /**  $scope.list = [{
        id:'1',
        name: 'Sales',
        imgSrc: 'image/company-4.jpg',
        companyName: 'Google',
        city:'New York',
        industry:'Internet',
        time:'2018-01-01'
    },{
        id:'2',
        name: 'Software Developer',
        imgSrc: 'image/company-5.png',
        companyName: 'Facebook',
        city:'Los Angelas',
        industry:'Social network',
        time:'2018-01-01'
    }];
    */
}]);