(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', '$state', '$stateParams'];

    function MoodController(MoodService, $state, $stateParams) {
      console.log('Creating Mood Controller');
      console.log($stateParams);
      this.userMood={};
      this.userJournal = {};
      this.mood = null;
      this.entry = null;
      this.record = {};
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
        $state.go('submitted', {themood: vm.mood});
      };

    /**
     * getJournal receives the text from the confirmation screen and sends the journal entry to the
     * service for storage
     *
     * @param  {String} entry The users journal entry on their mood
     * @return {VOID}       [description]
     */
      vm.getJournal = function getJournal(entry) {
        if(!$stateParams.themood) {
          return;
        } else {
          vm.record.mood = $stateParams.themood;
          vm.record.entry = entry;
          console.log(entry);
          MoodService.createToday(vm.record);
        }

      };



    }
}());
