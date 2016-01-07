angular.module('rtfmApp').controller('threadsCtrl', function ($scope, threadService, threadsRef, $firebaseArray, userService) {

	$scope.threads = $firebaseArray(threadsRef);
	$scope.username = userService.getUser();

	if($scope.username === undefined) {
		$scope.hider = true; 
	}

	$scope.createThread = function(username, newThreadTitle) {
		if (username === undefined || newThreadTitle === undefined) {
			return;
		}
		$scope.threads.$add({username: username, title: newThreadTitle})
		$scope.newThreadTitle = undefined;
	}
});