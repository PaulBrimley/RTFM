angular.module('rtfmApp').controller('threadCtrl', function ($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject) {

	var thread = $firebaseObject(threadRef);
	thread.$bindTo($scope, 'thread');
	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, comment) {
		if (username === undefined || comment === undefined) {
			return;
		}
		$scope.newCommentText = undefined;
		$scope.comments.$add({username: username, text: comment})
		
	}
})