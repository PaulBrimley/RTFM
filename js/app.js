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
		})
		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: '/js/login.html',
		})
		.state('logout', {
			url: '/logout',
			controller: function(userService) {
				return userService.logout();
			}
		})
		.state('signup', {
			url: '/signup',
			controller: 'signupCtrl',
			templateUrl: '/js/signup.html',
		});

	$urlRouterProvider.otherwise('/threads');
});

