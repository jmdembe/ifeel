(function() {
  'use strict';

  angular.module('ifeel', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider){
    $stateProvider

      .state({
        name: 'home',
        url: '',
        templateUrl: 'views/login.template.html'
      })

      .state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'input.template.html'
      })
  }
}());
