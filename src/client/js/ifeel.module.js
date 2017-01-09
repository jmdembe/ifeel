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
          theMood: null,
        }
      })
      .state({
        name: 'chart',
        url: '/analysis',
        templateUrl: 'views/charts.template.html',
        controller: 'ChartController',
        controllerAs: 'chart'
      });
  }
}());
