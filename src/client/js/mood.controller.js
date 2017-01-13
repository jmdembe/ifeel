(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', 'LoginService', '$state', '$stateParams'];

    function MoodController(MoodService, LoginService, $state, $stateParams) {
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
