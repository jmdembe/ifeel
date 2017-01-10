(function() {
  'use strict';

  describe('Login Controller', function () {
    var LoginController;
    var mockLoginService = {};
    var mockState = {};

    beforeEach(module('ifeel'));

    beforeEach(module(function($provide){
      $provide.value('LoginService', mockLoginService);
      $provide.value('$state', mockState);
    }));

    beforeEach(inject(function($controller) {
      mockLoginService.storeBasicProfile = function storeBasicProfile (argOne) {
        mockLoginService.storeBasicProfile.numTimesCalled++;
        mockLoginService.storeBasicProfile.lastArgument = argOne;
      };

      mockState.go = function (argOne) {
        mockState.go.numTimesCalled++;
        mockState.go.lastArgument = argOne;
      };
      mockLoginService.storeBasicProfile.numTimesCalled = 0;
      mockState.go.numTimesCalled = 0;

      LoginController = $controller('LoginController');
    }));

    it('Signs the user into the app with the help of a Google-defined function', function (){
      LoginController.onSignIn({foo:'value'});
      expect(mockLoginService.storeBasicProfile.numTimesCalled).to.equal(1);
      expect(mockLoginService.storeBasicProfile.lastArgument.foo).to.equal('value');
    });

    it('Executes the state change', function() {
      LoginController.onSignIn({foo: 'bell'});
      expect(mockState.go.numTimesCalled).to.equal(1);
      expect(mockState.go.lastArgument.foo).to.equal('bell');
    });

  });
}());
