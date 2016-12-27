(function() {
  'use strict';

  angular.module('ifeel', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider){
    $stateProvider

      .state({
        name: 'home',
        url:'',
        templateUrl: 'views/landing.template.html'
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
        templateUrl: 'views/confirm.template.html'
      });
  }
}());
