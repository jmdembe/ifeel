(function() {
  'use strict';

  angular.module('ifeel')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService() {

    var profile = null;

    return {
      storeBasicProfile: storeBasicProfile,
      retrieveProfileInfo: retrieveProfileInfo
    };

    function storeBasicProfile(user) {
      profile = user.getBasicProfile();
      console.log('profile info', profile);
    }

    function retrieveProfileInfo() {
      return profile;
    }


  }
}());
