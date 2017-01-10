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
        .whenPOST('/mood')
        .respond({
          "_id": "586fa5aa3b5c861bf8ddb5b9",
          'entry': "...",
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
          .whenGET('/mood')
          .respond({
              "_id": "587502d85dda62510e0c02b1",
              "profile": {
                "Eea": "110514567623357669787",
                "ig": "Jessica Dembe",
                "ofa": "Jessica",
                "wea": "Dembe",
                "Paa": "https://lh4.googleusercontent.com/-MHhjrb1-pxo/AAAAAAAAAAI/AAAAAAAAAaU/ZOB30-gKm1g/s96-c/photo.jpg",
                "U3": "jmdembe@gmail.com"
              },
              "mood": "good",
              "entry": "I am happy today.",
              "createTime": 1484063448982
          });

      $httpBackend
        .whenGET('views/home.template.html')
        .respond('At the home template');

        $httpBackend
          .whenGET('views/input.template.html')
          .respond('At the input template');

        $httpBackend
          .whenGET('views/confirm.template.html')
          .respond('At the confirm template');
    }));

    it('Should post information to the database', function(dc) {
      var result = MoodService.createToday({'mood':'great', 'postDate': 1483711914100});
      expect(result).to.be.an('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');

      result
        .then(function(data) {
          expect(data).to.be.an('object');
          expect(data.mood).to.be.a('string');
          expect(data.mood).to.equal('great');
          expect(data.postDate).to.be.a('number');
          expect(data.postDate).to.equal(1483711914100);
          dc();
        })
        .catch(function(xhr) {
          console.log(xhr.message);
          dc('Why is this happening?', xhr.message);
        });
        $httpBackend.flush();
    });

    it('Should get information from the database', function() {
      var result = MoodService.getAll();
      expect(result).to.be.an('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');

      result
        .then(function(data) {
          expect(data).to.be.an('object');
        });
    });
  });
})();
