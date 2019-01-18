'use strict';
//引入模塊
angular.module('app',['ui.router']);
'use strict'
angular.module('app').controller('companyCtrl',['$scope', function($scope){

}]);

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
'use strict';

angular.module('app').controller('positionCtrl',['$http','$state','$scope', function($http,$scope,$state){
    $scope.isLogin = false;
    $http({
        method:'GET',
        url:'/data/position.json'
    }).then(function(res){
        $scope.position = res;
        console.log(position);
    })
}]);

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
'use strict'
//-h代表H 大寫
//把head.html <div app-head=""></div> 根元素<div>替換掉
angular.module('app').directive('appHeadBar',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/headBar.html',
        scope: {
            text: '='
        },
        link: function($scope){
            $scope.back = function(){
                window.history.back();
            }
        }
    };
}]); 
'use strict'
angular.module('app').directive('appPositionClass', [function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl:'view/template/positionClass.html'
    }
}]);
'use strict'
//-p, -l代表P H 大寫
//把position.html <div app=""></div> 根元素<div>替換掉
angular.module('app').directive('appPositionInfo',[function(){
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/positionInfo.html',
        scope:{
            isActive: '=',
            isLogin:'=',
            pos:'='
        },
        link: function($scope){
            $scope.imagePath = $scope.isActive? 'image/star-active.png': 'image/star.png';
        }
    }
}]);
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