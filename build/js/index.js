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
'use strict';

angular.module('app').controller('mainCtrl',['$scope', function($scope){

}]);
'use strict'
//-h代表H 大寫
//把head.html <div app-head=""></div> 根元素<div>替換掉
angular.module('app').directive('appHead',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/head.html'
    };
}]);