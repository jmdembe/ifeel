(function() {
  'use strict';

  angular.module('ifeel')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService() {
    var token;

    return {
      isLoggedIn: isLoggedIn
    };

    function isLoggedIn() {
      return token;
    }
  }
}());
