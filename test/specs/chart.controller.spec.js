(function() {
  'use strict';

  var expect = chai.expect;

  describe('Chart Controller', function(){
    // var ChartController;
    var ChartController;
    var mockMoodService = {};

    beforeEach(module('ifeel'));

    beforeEach(module(function($provide) {
      $provide.value('MoodService', mockMoodService);
    }));

    beforeEach(inject(function($controller) {
      mockMoodService.getAll = function() {

        mockMoodService.getAll.numTimesCalled++;

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
      mockMoodService.getAll.numTimesCalled = 0;

      ChartController=$controller('ChartController');
    }));

    it('should have all the scope variables that it is supposed to', function() {
      expect(ChartController.labels).to.be.an('array');
      expect(ChartController.data).to.be.an('array');
    });

    it('Should get the records from the database', function() {
      expect(mockMoodService.getAll.numTimesCalled).to.equal(1);
    });

  });

}());
