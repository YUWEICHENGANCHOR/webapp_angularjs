'use strict';
//引入模塊
angular.module('app',['ui.router']);
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    //配置路由
    $stateProvider.state('main',{
        url: '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    });
    //默認跳轉路由
    $urlRouterProvider.otherwise('main');


}])