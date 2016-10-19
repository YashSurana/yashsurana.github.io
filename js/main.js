var myApp=angular.module("myApp",[]);
myApp.service('Data',function(){
	this.arrTask=[];
	this.arrComplete=[];
	this.arrResponse=[];
	this.addtask=function(task){
		this.arrTask.push(task);
	}
	this.removetask=function(task){
		this.arrComplete.push(task);
		var index = task.indexOf(task);
		this.arrTask.splice(index,1);
	}
	this.showResponse=function(r){
		this.arrResponse.push(r);
		console.log(this.arrResponse);
	}
});
myApp.controller('addTaskCtrl',function($scope,Data){
	$scope.save=function(){
		Data.addtask($scope.task);
		$scope.task='';
	}
});

myApp.controller('getTaskCtrl',function($scope,Data){	
		$scope.pending=Data.arrTask;
		$scope.complete=function(task1){
			Data.removetask(task1);
		}
		$scope.completed=Data.arrComplete;
});
myApp.controller('getJsonCtrl',function($scope,$http,Data){	
		$http.get("json/exp.json").then(function(response){
			console.log(response);
			Data.showResponse(response);
		});
});
