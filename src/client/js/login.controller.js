(function() {
  'use strict';

  angular.module('ifeel')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'LoginService'];

    function LoginController($state, LoginService) {

      this.onSignIn = function onSignIn(googleUser){
        console.log('logged into google');
        LoginService.storeBasicProfile(googleUser);
        $state.go('dashboard');
      };

    }
}());
