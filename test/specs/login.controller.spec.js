(function() {
  'use strict';

  describe('Login Controller', function () {
    var LoginController;
    var mockLoginService = {};

    beforeEach(module('ifeel'));

    beforeEach(inject(function($controller) {
      mockLoginService.storeBasicProfile = function () {
        return [
          {
            El: '110514567623357669787',
            Zi: {
              access_token: 'thisisthefakesttokenIhaveeverseeninmylifeIwouldneverputthisontheinternet',
              expires_at: 3456789786543213456789654,
            }
          }
        ];
      };
      LoginController = $controller('LoginController');
    }));

  });
}());
