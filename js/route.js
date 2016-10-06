var app= angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "partials/main.htm"
		})
	.when("/personal",{
		templateUrl : "partials/personal.htm"
	});
});