(function() {
  'use strict';

  angular.module('ifeel')
    .directive('hellouser', HelloUserDirective);

    function HelloUserDirective() {
      return{
        templateUrl: 'views/hellouser.template.html',
        restrict: 'EA',
        scope: {
            welcome: '&'
        },
        link: welcomeUser
      };
    }

    function welcomeUser(scope) {
        // var username = scope.welcome();
        console.log(scope.welcome);
        console.log(scope.welcome());
        // function getName() {
          // var $ = angular.element;

          // $(element).find

    }
}());
