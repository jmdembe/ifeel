(function() {
    'use strict';


    var expect= chai.expect;

    describe('Login Service', function() {
      var LoginService;

      beforeEach(module('ifeel'));

      beforeEach(inject(function(_LoginService_){
          LoginService = _LoginService_;
      }));

      it('Should be able to get profile information after login', function() {
          var result = LoginService.getBasicProfile();
          expect(result).to.be.an('object');
      });
    });



}());
