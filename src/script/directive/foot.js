'use strict'
//-h代表H 大寫
//把foot.html <div app-foot=""></div> 根元素<div>替換掉
angular.module('app').directive('appFoot', [function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/foot.html'
    };
}])