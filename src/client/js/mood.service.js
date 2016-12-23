(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    function MoodService() {
      return {
        getActivity: getActivity,
        getSleep: getSleep
      };

      function getActivity() {
        console.log("work on this");
      }

      function getSleep() {
        console.log('work on this too!');
      }
    }
}());
