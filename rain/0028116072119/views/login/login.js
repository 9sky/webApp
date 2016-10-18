/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("loginCtrl",function($scope,$ionicHistory){
    $scope.go = function(){
        //var state = $ionicHistory.viewHistory().backView.stateName;
        //$state.go(state)
        $ionicHistory.goBack(-1)
    }
});