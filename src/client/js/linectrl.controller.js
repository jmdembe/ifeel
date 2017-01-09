(function() {
  'use strict';

  angular.module('ifeel')
    .controller('LineCtrl', LineCtrl);

    LineCtrl.$inject = ['$state', 'MoodService'];

    function LineCtrl($state, MoodService) {
      // TODO: Get all the dates from server.
      console.log(arguments);
      this.labels = MoodService.getAll().postDate;
      this.series = ['Mood', 'Description'];
      this.onClick = function(points,evt) {
        console.log(points, evt);
      };
    }
}());
