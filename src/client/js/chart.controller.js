(function() {
  'use strict';

  angular.module('ifeel')
    .controller('ChartController', ChartController);

    ChartController.$inject = ['MoodService'];

    function ChartController(MoodService) {
      this.moodRecordsData = null;
      var vm = this;

      MoodService.getAll()
        .then(function addDataToScope(data){
          vm.moodRecordsData = data;
        });

      this.labels = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      this.series = ['Series A', 'Series B'];
      this.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      this.onClick = function (points, evt) {
        console.log(points, evt);
      };
      this.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      this.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };
    }
}());
