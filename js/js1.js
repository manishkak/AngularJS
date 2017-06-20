var app1 = angular.module('app1', []); //define the angular JS "module"..app1 is the module name..this will be defined in the hmtl tag in the html file

app1.controller('ctrl1', function($scope)           //defining the controller..this func. is called a factory func.
{
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.updateValue = function() {
	$scope.calculation = $scope.first + '+' + $scope.second +  " = " + (+$scope.first + +$scope.second);
}
});