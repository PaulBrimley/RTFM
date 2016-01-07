var app = angular.module('rtfmApp', ['ui.router', 'firebase']);

app.constant('fb', 'https://pauls-new-forum.firebaseio.com/');

app.config(function ($stateProvider, $urlRouterProvider){ 
	
	$stateProvider
		.state('threads', {
			url: '/threads',
			templateUrl: '/js/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadService) {
					return threadService.getThreads();
				}
			}
		})
		.state('thread', {
			url: '/thread/:threadId',
			templateUrl:'/js/thread.html',
			controller: 'threadCtrl', 
			resolve: {
				threadRef: function(threadService, $stateParams) {
					return threadService.getThread($stateParams.threadId);
				},
				commentsRef: function(threadService, $stateParams) {
					return threadService.getComments($stateParams.threadId);
				}
			}
		});

	$urlRouterProvider.otherwise('/threads');
});

