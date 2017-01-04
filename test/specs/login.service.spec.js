(function() {
    'use strict';


    var expect= chai.expect;

    describe('Login Service', function() {
      var LoginService;
      var $httpBackend;

      beforeEach(module('ifeel'));

      beforeEach(inject(function(_$httpBackend_,_LoginService_){
          $httpBackend = _$httpBackend_;
          LoginService = _LoginService_;
      }));

      it('Should be able to get profile information after login', function() {
          var fakeGoogleUser = {
            getBasicProfile: function fakegetBasicProfile() {
                return {name: 'Jessica', email: 'jmdembe@gmail.com'};
            }
          };
          var result = LoginService.storeBasicProfile(fakeGoogleUser);
          console.log(result);
          expect(LoginService.retrieveProfileInfo().name).to.equal('Jessica');
      });
    });



}());
