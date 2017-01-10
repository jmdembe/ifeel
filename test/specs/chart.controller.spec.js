(function() {
  'use strict';

  // var expect = chai.expect;

  describe ('Chart Controller', function(){
    // var ChartController;
    var ChartController;
    var mockMoodService = {};

    beforeEach(module('ifeel'));

    beforeEach(module(function($provide) {
      $provide.value('MoodService', mockMoodService);
    }));

    beforeEach(inject(function($controller) {
      mockMoodService.getAll = function() {
        return [
          {
            "_id": "58751a225dda62510e0c02b5",
            "profile": {
              "Eea": "110514567623357669787",
              "ig": "Jessica Dembe",
              "ofa": "Jessica",
              "wea": "Dembe",
              "Paa": "https://lh4.googleusercontent.com/-MHhjrb1-pxo/AAAAAAAAAAI/AAAAAAAAAaU/ZOB30-gKm1g/s96-c/photo.jpg",
              "U3": "jmdembe@gmail.com"
            },
            "mood": "good",
            "entry": "this is fine.",
            "createTime": 1484069410596
          }
        ];
      };

      mockMoodService.spy = function(argOne) {
        mockMoodService.spy.numTimesCalled++;
        mockMoodService.spy.lastArgument = argOne;
      };

      ChartController=$controller('ChartController');
    }));

    it('Should get the records from the database', function() {

    });

  });

}());
