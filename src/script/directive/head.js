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