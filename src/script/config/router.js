'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    //配置路由
    $stateProvider.state('main',{
        url: '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    }).state('position',{
        url: '/position/:id',
        templateUrl: 'view/position.html',
        controller: 'positionCtrl'
    }).state('company', {
        url: '/company:id',
        templateUrl: 'view/company.html',
        controller: 'companyCtrl'
    });
    //默認跳轉路由
    $urlRouterProvider.otherwise('main');


}])