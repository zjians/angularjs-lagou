angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,l){e.state("main",{url:"/main",templateUrl:"view/main.html"}).state("login",{url:"/login",templateUrl:"view/login.html"}),l.otherwise("login")}]);