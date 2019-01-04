'use strict'
//-p, -l代表P H 大寫
//把position.html <div app=""></div> 根元素<div>替換掉
angular.module('app').directive('appPositionList', [function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        //屬性共享
        scope: {
            data: '='//指令中創建作用域 控制器中創建作用域，指令相對於控制器的子元素
        }

    };
}])