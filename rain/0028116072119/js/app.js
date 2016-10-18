/**
 * Created by hxsd on 2016/9/28.
 *
 * 主模块，程序的入口
 */
var myapp = angular.module("myapp",["ionic"]);

//注册一个控制器
myapp.controller("myCtrl",function($scope){



});

//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,      //抽象的 - 意思是不具体化，不真的显示它
        templateUrl:"views/tabs/tabs.html"
    }).state("tabs.home",{
        url:"/home",
        views:{"tabs-home":{templateUrl:"views/home/home.html"}}
    }).state("tabs.order",{
        url:"/order",
        views:{"tabs-order":{templateUrl:"views/order/order.html"}}
    }).state("tabs.message",{
        url:"/message",
        views:{"tabs-message":{templateUrl:"views/message/message.html"}}
    }).state("login",{
        url:"/login",
        templateUrl:"views/login/login.html",controller:"loginCtrl"
    }).state("tabs.fast",{
        url:"/fast",
        views:{"tabs-order":{templateUrl:"views/fast/fast.html"}}
    }).state("tabs.eczema",{
        url:"/eczema",
        views:{"tabs-home":{templateUrl:"views/eczema/eczema.html"}}
    }).state("tabs.quick",{
        url:"/quick",
        views:{"tabs-home":{templateUrl:"views/quick/quick.html"}}
    }).state("tabs.eye",{
        url:"/eye",
        views:{"tabs-home":{templateUrl:"views/eye/eye.html"}}
    }).state("tabs.nose",{
        url:"/nose",
        views:{"tabs-home":{templateUrl:"views/nose/nose.html"}}
    }).state("tabs.fridge",{
        url:"/fridge",
        views:{"tabs-home":{templateUrl:"views/fridge/fridge.html"}}
    }).state("tabs.trouble",{
        url:"/trouble",
        views:{"tabs-home":{templateUrl:"views/trouble/trouble.html"}}
    });

    //设置默认路由
    $urlRouterProvider.otherwise("/tabs/home")
});