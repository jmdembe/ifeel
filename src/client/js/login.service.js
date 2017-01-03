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

    /**
     * This function stores user profile information after the user has logged into the app.
     * Login information is then stored into profile.
     * @param  {Object} user [description]
     * @return {VOID}      [description]
     */
    function storeBasicProfile(user) {
      console.log(user);
      profile = user.getBasicProfile();
      console.log('profile info', profile);
    }

    /**
     * This function retrieves user profile information once called. The function returns
     * an array with profile information.
     * @return {[type]} [description]
     */
    function retrieveProfileInfo() {
      return profile;
    }


  }
}());
