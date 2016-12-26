(function() {
  'use strict';

  angular.module('ifeel')
    .factory('FitBitService', FitBitService);

    FitBitService.inject = ['$http'];

    function FitBitService($http) {
      return {
        getActivity: getActivity
      };

      function getActivity() {
        console.log("this is activity data");
        return $http({
          url: 'https://api.fitbit.com/1/user/:user-id/activities/date/:date.json',
          method: 'GET'
        })
        .then(function successHandler(response) {
          return response.data;
        });
      }
    }
}());
