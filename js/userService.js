angular.module('rtfmApp').service('userService', function ($firebaseArray, $firebaseObject, fb, $firebaseAuth, $state) {

	var auth = $firebaseAuth(new Firebase(fb));
	var self = this;

	this.getUser = function() {
		var signedIn = auth.$getAuth();
		if (signedIn === null) {
			$state.go('login');
			return;
		}
		return signedIn.password.email;
	}

	this.register = function(user) {
		auth.$createUser({email: user.email, password: user.password}).then(function(newUserData) {
			self.login(user);
		}).catch(function(err) {
			console.log('Create User Error: ', err);
		})
	}

	this.login = function(user) {
		auth.$authWithPassword({email: user.email, password: user.password}).then(function(authData) {
			$state.go('threads');
		}).catch(function(err) {
			alert('User does not exist. Please sign up.');
		})
	}

	this.logout = function() {
		return auth.$unauth();
	}

	auth.$onAuth(function(authData) {
		if (!authData) {
			$state.go('login');
		}
	});

});