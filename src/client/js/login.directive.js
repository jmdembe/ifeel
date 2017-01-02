(function() {
  'use strict';

  angular.module('ifeel')
    .directive('login', LogInDirective);

    function LogInDirective() {
      return {
        templateUrl: 'views/login-button.template.html',
        restrict: 'EA',
        scope: {
          success: '&'
        },
        link: initiateTheButton
      };

      function initiateTheButton(scope) {
        var successHandler = scope.success();

        gapi.signin2.render('my-login-button', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': successHandler,
        // 'onfailure': onFailure
      });
      }
    }
}());
