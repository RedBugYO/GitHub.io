(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.state = "";



  $scope.lunchcheck = function () {
  	if($scope.lunch == "")
  		$scope.state = "Please enter data first";
  	else if(($scope.lunch.split(",").length - 1) <= 3)
    	$scope.state = "Enjoy!";
    else
    	$scope.state = "Too much!";
  };
}

})();
