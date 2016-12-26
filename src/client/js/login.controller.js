(function() {
  'use strict';

  angular.module('ifeel')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'LoginService'];
    
    function LoginController($state, LoginService) {
      this.user = {};

      this.userLogin = function userLogin(user){
        LoginService.userLogin(user)
          .then(function loginSuccess() {
            $state.go('dashboard');
          });
      };
    }
}());
