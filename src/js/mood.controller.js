(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    function MoodController() {
      console.log('Creating Mood Controller');
      this.userMood={};
      this.mood = null;
      var vm=this;

      /**
       * getMood takes the user click (the user's mood) and assigns a value based
       * on the user's click. This value is a string.
       *
       * @param  {String} mood [description]
       */
      vm.getMood = function getMood(mood) {
        vm.mood=mood;
        console.log('This is your mood', mood);
      };
    }
}());
