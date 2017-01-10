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

    /**
     * This function adds a new record to the database. The record must be an object.
     * @param  {Object} record The user-submitted data that is being added to the database
     * @return {Promise}        [description]
     */
      function createToday(record) {
        console.log(record);
        return $http({
            url: '/mood',
            data: angular.toJson(record),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function successHandler(response) {
          console.log(response.data);
          return response.data;
        });
      }

      /**
       * This function gets all of the data from the server. The data from this function will be used to create
       * a chart to show mood over time.
       * @return {Promise}
       */
      function getAll() {
        return $http({
          url: '/mood',
          method: 'GET',
        })
        .then(function successHandler(response) {
          return response.data;
        });
      }
    }
}());
