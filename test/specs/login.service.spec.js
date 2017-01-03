(function() {
    'use strict';


    var expect= chai.expect;

    describe('Mood Service', function() {
      var MoodService;

      beforeEach(module('ifeel'));

      beforeEach(inject(function(_MoodService_){
          MoodService = _MoodService_;
      }));
    });

    

}());
