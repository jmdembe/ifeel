(function() {
  'use strict';

  angular.module('ifeel')
    .controller('Chart', Chart);

    Chart.$inject = ['MoodService'];

    function Chart($state, MoodService) {
      // TODO: Get all the dates from server.
      console.log(arguments);
      this.labels = MoodService.getAll().postDate;
      this.series = ['Mood', 'Description'];
      this.onClick = function(points,evt) {
        console.log(points, evt);
      };
    }
}());
