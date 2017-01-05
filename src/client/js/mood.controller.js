(function() {
  'use strict';

  angular.module('ifeel')
    .controller('MoodController', MoodController);

    MoodController.$inject = ['MoodService', 'LoginService', '$state', '$stateParams'];

    function MoodController(MoodService, LoginService, $state, $stateParams) {
      console.log('Creating Mood Controller');
      console.log($stateParams);
      this.userMood={};
      this.userJournal = {};
      this.mood = null;
      this.entry = null;
      this.record = {};
      this.userProfile = null;
      var vm=this;

      /**
       * getMood takes the user click (the user's mood) and sends the mood to the service and the
       *
       * @param  {String} mood [description]
       * @return {VOID}
       */
      vm.getMood = function getMood(mood) {
        vm.mood=mood;
        vm.userProfile = LoginService.retrieveProfileInfo();
        vm.userName = LoginService.retrieveProfileInfo().ofa;
        console.log('This is your mood', mood);
        $state.go('submitted', {
          theMood: vm.mood,
          theUser: vm.userProfile,
          theName: vm.userName
        });
      };

    /**
     * getJournal receives the text from the confirmation screen and sends the journal entry to the
     * service for storage
     *
     * @param  {String} entry The users journal entry on their mood
     * @return {VOID}       [description]
     */
      vm.getJournal = function getJournal(entry) {
        if(!$stateParams.theMood) {
          return;
        } else {
          vm.record.mood = $stateParams.theMood;
          vm.record.theUser = $stateParams.theUser;
          vm.record.theName = $stateParams.theName;
          vm.record.entry = entry;
          console.log(entry);
          MoodService.createToday(vm.record);
        }
      };


    }
}());
