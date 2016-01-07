angular.module('rtfmApp').controller('signupCtrl', function ($scope, $firebaseArray, $firebaseObject, userService) {

	$scope.register = function(newUser) {
		if (newUser === undefined || newUser.email === undefined || newUser.password === undefined) {
			return;
		}
		userService.register(newUser);
	}

});