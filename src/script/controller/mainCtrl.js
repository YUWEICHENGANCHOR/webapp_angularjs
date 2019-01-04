'use strict';

angular.module('app').controller('mainCtrl',['$scope', function($scope){
    $scope.list = [{
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
}]);