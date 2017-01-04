(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    MoodService.$inject = ['$http'];

    function MoodService($http) {
      var record = {};

      return {
        plotMood: plotMood,
        plotDiary: plotDiary,
        createToday: createToday
      };

      function plotMood(mood) {
        record.mood=mood;
      }

      function plotDiary(entry) {
        record.entry=entry;
        record.date=Date.now();
        console.log(record);
      }

      function createToday(record) {
        return $http({
            url: '/mood',
            data: angular.toJson(record),
            method: 'POST',
            dataType: 'json',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function successHandler(response) {
          return response.data;
        });
      }
    }
}());
