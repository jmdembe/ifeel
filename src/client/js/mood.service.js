(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    function MoodService() {
      var record = {};

      return {
        plotMood: plotMood,
        plotDiary: plotDiary
      };

      function plotMood(mood) {
        record.mood=mood;
      }

      function plotDiary(entry) {
        record.entry=entry;
      }
    }
}());
