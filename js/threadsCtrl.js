angular.module('rtfmApp').controller('threadsCtrl', function($scope, threadService, threadsRef, $firebaseArray) {

	$scope.threads = $firebaseArray(threadsRef);

	$scope.createThread = function(username, newThreadTitle) {
		if (username === undefined || newThreadTitle === undefined) {
			return;
		}
		$scope.threads.$add({username: username, title: newThreadTitle})
		$scope.newThreadTitle = undefined;
		$scope.username = undefined;
	}
})