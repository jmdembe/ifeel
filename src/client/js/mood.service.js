(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    MoodService.$inject = ['$http'];

    function MoodService($http) {

      return {
        createToday: createToday,
        getAll: getAll
      };

      function createToday(record) {
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

      function getAll() {
        return $http({
            url: '/mood',
            method: 'GET',
            dataType: 'json'
        })
        .then(function successHandler(response) {
          return response.data;
        });
      }
    }
}());
