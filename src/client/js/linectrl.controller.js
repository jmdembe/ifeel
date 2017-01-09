(function() {
  'use strict';

  angular.module('ifeel', ['chart.js'])
    .controller('LineCtrl', LineCtrl);

    LineCtrl.$inject = ['MoodService'];

    function LineCtrl(MoodService) {
      // TODO: Get all the dates from server.
      this.labels = MoodService.getAll().postDate;
      this.series = ['Mood', 'Description'];
      this.onClick = function(points,evt) {
        console.log(points, evt);
      };
    }
}());
