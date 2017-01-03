(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    function MoodService() {
      return {
        storeNotes: storeNotes
      };

      function storeNotes(note) {
        return note;
      }
    }
}());
