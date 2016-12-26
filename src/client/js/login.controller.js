(function() {
  'use strict';

  angular.module('ifeel')
    .controller('LoginController', LoginController);

    function LoginController($state) {
      this.user = {};

      this.userLogin = function userLogin(user){
        LoginService.userLogin(user)
          .then(function loginSuccess() {
            $state.go('dashboard');
          });
      };
    }
}());
