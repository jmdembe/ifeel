(function() {
  'use strict';

  angular.module('ifeel')
    .controller('ChartController', ChartController);

    ChartController.$inject = ['$state','MoodService'];

    function ChartController($state, MoodService) {
      console.log('creating chart controller');
      // TODO: Get all the dates from server.
      console.log(arguments);
      this.labels = MoodService.getAll().postDate;
      this.series = ['Mood', 'Description'];
      this.onClick = function(points,evt) {
        console.log(points, evt);
      };
    }
}());
