angular.module('rtfmApp').controller('loginCtrl', function ($scope, $firebaseArray, $firebaseObject, userService) {

	$scope.login = function(user) {
		if (user === undefined || user.email === undefined || user.password === undefined) {
			return;
		}
		userService.login(user);
	}

	$scope.username = userService.getUser();
	
	if($scope.username === undefined) {
		$scope.hider = true; 
	}

});