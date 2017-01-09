(function() {
  'use strict';

  var expect = chai.expect;

  describe ('Mood Service', function() {
    var MoodService;
    var $httpBackend;
    var $rootScope;

    beforeEach(module('ifeel'));

    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _MoodService_) {
      MoodService = _MoodService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;

      $httpBackend
        .whenGET('/mood')
        .respond({
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
        });

      $httpBackend
        .whenGET('views/home.template.html')
        .respond('At the home template');
    }));

    it('Should be a function to save to the database', function() {
      var result = MoodService.createToday({"mood":"great", 'postDate': 1483711914100});
      expect(result).to.be.an('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');
    });
  });
}());
