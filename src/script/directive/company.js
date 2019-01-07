'use strict'
//-p, -l代表P H 大寫
//把company.html <div app=""></div> 根元素<div>替換掉
angular.module('app').directive('appCompany',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/company.html',
        
    }
}]);