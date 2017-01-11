(function() {
  'use strict';

  angular.module('ifeel', ['ui.router', 'chart.js'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/');

    $stateProvider
      .state({
        name: 'home',
        url:'/',
        templateUrl: 'views/home.template.html'
      })
      .state({
        name: 'login',
        url:'/login',
        templateUrl: 'views/login.template.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'views/input.template.html',
        controller: 'MoodController',
        controllerAs: 'mood'
      })
      .state({
        name: 'submitted',
        url: '/confirm',
        templateUrl: 'views/confirm.template.html',
        controller: 'MoodController',
        controllerAs: 'mood',
        params: {
          theMood: null
        }
      })
      .state({
        name: 'analysis',
        url: '/analysis',
        templateUrl: 'views/charts.template.html',
        controller: 'ChartController',
        controllerAs: 'chart'
      })
      .state({
        name: 'helpline',
        url: '/helpline',
        templateUrl: 'views/helpline.template.html'
      })
      .state({
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.template.html'
      });
  }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .controller('ChartController', ChartController);

    ChartController.$inject = ['$filter', 'MoodService'];

    function ChartController($filter, MoodService) {
      this.labels = [];
      this.data = [];
      var vm = this;

      MoodService.getAll()
        .then(function addDataToScope(moodRecords){
          console.log('got mood data', moodRecords);
          vm.labels = moodRecords.map(function getLabels(moodRecord) {
            return $filter('date')(moodRecord.createTime, 'dd/MM/yyyy');
          });
          vm.data = moodRecords.map(function getData(moodRecord) {
            if (moodRecord.mood === 'angry') {
              return 1;
            } else if (moodRecord.mood === 'notgood') {
              return 2;
            } else if (moodRecord.mood === 'okay') {
              return 3;
            } else if (moodRecord.mood === 'good') {
              return 4;
            } else {
              return 5;
            }
          });
        });

    }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'LoginService'];

    function LoginController($state, LoginService) {

      this.onSignIn = function onSignIn(googleUser){
        LoginService.storeBasicProfile(googleUser);
        $state.go('dashboard');
      };

    }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .directive('login', LogInDirective);

    function LogInDirective() {
      return {
        templateUrl: 'views/login-button.template.html',
        restrict: 'EA',
        scope: {
          success: '&'
        },
        link: initiateTheButton
      };

      function initiateTheButton(scope) {
        var successHandler = scope.success();

        gapi.signin2.render('my-login-button', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': successHandler,
        // 'onfailure': onFailure
      });
      }
    }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService() {

    var profile = null;

    return {
      storeBasicProfile: storeBasicProfile,
      retrieveProfileInfo: retrieveProfileInfo
    };

    /**
     * This function stores user profile information after the user has logged into the app.
     * Login information is then stored into profile.
     * @param  {Object} user [description]
     * @return {VOID}      [description]
     */
    function storeBasicProfile(user) {
      console.log(user);
      profile = user.getBasicProfile();
      console.log('profile info', profile);
    }

    /**
     * This function retrieves user profile information once called. The function returns
     * an array with profile information.
     * @return {[type]} [description]
     */
    function retrieveProfileInfo() {
      return profile;
    }


  }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', 'LoginService', '$state', '$stateParams'];

    function MoodController(MoodService, LoginService, $state, $stateParams) {
      console.log('Creating Mood Controller');
      this.userMood={};
      this.userJournal = {};
      this.mood = null;
      this.entry = null;
      this.record = {};
      this.userProfile = null;
      var vm=this;
      this.record.profile = LoginService.retrieveProfileInfo();
      this.myData = null;
      this.labels = null;

      /**
       * getMood takes the user click (the user's mood) and sends the mood to the service and the
       *
       * @param  {String} mood [description]
       * @return {VOID}
       */
      vm.getMood = function getMood(mood) {
        vm.mood=mood;
        console.log('This is your mood', mood);
        $state.go('submitted', {
          theMood: vm.mood,
          theName: vm.userName
        });
      };

    /**
     * getJournal receives the text from the confirmation screen and sends the journal entry to the
     * service for storage
     *
     * @param  {String} entry The users journal entry on their mood
     * @return {VOID}
     */
      vm.getJournal = function getJournal(entry) {
        if(!$stateParams.theMood) {
          return;
        } else {
          vm.record.mood = $stateParams.theMood;
          vm.record.entry = entry;
          MoodService.createToday(vm.record)
            .then(function data() {
              $state.go('analysis');
            });
          }
      };
    }
}());

(function() {
  'use strict';

  angular.module('ifeel')
    .factory('MoodService', MoodService);

    MoodService.$inject = ['$http'];

    function MoodService($http) {

      return {
        createToday: createToday,
        getAll: getAll
      };

    /**
     * This function adds a new record to the database. The record must be an object.
     * @param  {Object} record The user-submitted data that is being added to the database
     * @return {Promise}        [description]
     */
      function createToday(record) {
        console.log(record);
        return $http({
            url: '/mood',
            data: angular.toJson(record),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(function successHandler(response) {
          console.log(response.data);
          return response.data;
        });
      }

      /**
       * This function gets all of the data from the server. The data from this function will be used to create
       * a chart to show mood over time.
       * @return {Promise}
       */
      function getAll() {
        return $http({
          url: '/mood',
          method: 'GET',
        })
        .then(function successHandler(response) {
          return response.data;
        });
      }
    }
}());
