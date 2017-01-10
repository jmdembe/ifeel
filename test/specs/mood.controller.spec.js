(function() {
    'use strict';

    var expect = chai.expect;

    describe('Mood Controller', function() {
      var MoodController;
      var mockMoodService = {};

      beforeEach(module('ifeel'));

      beforeEach(module(function($provide) {
          $provide.value('MoodService', mockMoodService);
      }));

      beforeEach(inject(function($controller) {
        mockMoodService.getAll = function() {
          return [
            {
              "_id": "586fa5aa3b5c861bf8ddb5b9",
              "profile": {
                "Eea": "110514567623357669787",
                "ig": "Jessica Dembe",
                "ofa": "Jessica",
                "wea": "Dembe",
                "Paa": "https://lh4.googleusercontent.com/-MHhjrb1-pxo/AAAAAAAAAAI/AAAAAAAAAaU/ZOB30-gKm1g/s96-c/photo.jpg",
                "U3": "jmdembe@gmail.com"
              },
              "mood": "great",
              "postDate": 1483711914100,
              "createTime": 1483711914160
            }
          ];
        };

        MoodController = $controller('MoodController');
      }));

      it('Should have all needed scope variables', function(){
          expect(MoodController.userMood).to.be.an('object');
          expect(Object.keys(MoodController.userMood).length).to.equal(0);
      });
    });
}());
