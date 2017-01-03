(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', '$state'];

    function MoodController() {
      console.log('Creating Mood Controller');
      this.userMood={};
      this.mood = null;
      var vm=this;


      /**
       * getMood takes the user click (the user's mood) and sends the mood to the service and the
       *
       * @param  {String} mood [description]
       */
      vm.getMood = function getMood(mood) {
        vm.mood=mood;
        console.log('This is your mood', mood);
      };
    }
}());
