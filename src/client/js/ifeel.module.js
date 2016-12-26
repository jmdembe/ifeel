(function() {
  'use strict';

  angular.module('ifeel', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider){
    $stateProvider

      .state({
        name: 'dashboard',
        url: '',
        templateUrl: 'views/input.template.html',
        controller: 'MoodController',
        controllerAs: 'mood'
      })
      .state({
        name: 'submitted',
        url: '/confirm',
        templateUrl: 'views/confirm.template.html'
      });
  }
}());
