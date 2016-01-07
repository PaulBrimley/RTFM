angular.module('rtfmApp').service('threadService', function ($firebaseArray, $firebaseObject, fb) {
	
	this.getThreads = function() {
		return new Firebase(fb + '/threads');		
	}

	this.getThread = function(threadId) {
		return new Firebase(fb + '/threads/' + threadId);
	}

	this.getComments = function(threadId) {
		return new Firebase(fb + '/threads/' + threadId + '/comments');
	}
})