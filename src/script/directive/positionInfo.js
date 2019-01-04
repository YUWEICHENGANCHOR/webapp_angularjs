'use strict'
//-p, -l代表P H 大寫
//把position.html <div app=""></div> 根元素<div>替換掉
angular.module('app').directive('appPositionInfo',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/positionInfo.html',
        scope:{
            isActive: '='
        },
        link: function($scope){
            $scope.imagePath = $scope.isActive? 'image/star-active.png': 'image/star.png';
        }
    }
}]);