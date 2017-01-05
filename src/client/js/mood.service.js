(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    MoodService.$inject = ['$http'];

    function MoodService($http) {

      return {
        createToday: createToday
      };

      function createToday(record) {
        record.postDate=Date.now();
        console.log(record);
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
