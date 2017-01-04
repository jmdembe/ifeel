(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', '$state', '$stateParams'];

    function MoodController(MoodService, $state) {
      console.log('Creating Mood Controller');
      this.userMood={};
      this.userJournal = {};
      this.mood = null;
      this.entry = null;
      var vm=this;


      /**
       * getMood takes the user click (the user's mood) and sends the mood to the service and the
       *
       * @param  {String} mood [description]
       * @return {VOID}
       */
      vm.getMood = function getMood(mood) {
        vm.mood=mood;
        console.log('This is your mood', mood);
        MoodService.plotMood(vm.mood);
        $state.go('submitted');
      };

    /**
     * getJournal receives the text from the confirmation screen and sends the journal entry to the
     * service for storage
     *
     * @param  {String} entry The users journal entry on their mood
     * @return {VOID}       [description]
     */
      vm.getJournal = function getJournal(entry) {
        console.log(entry);
        MoodService.plotDiary(entry);
      };

      vm.createToday = function createToday() {
        MoodService.createToday(this.userMood.mood, this.userMood.entry);
      };

    }
}());
