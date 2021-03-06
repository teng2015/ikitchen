// Ionic Starter App

// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider 

  .state('tab', {  //下方导航栏
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.ikitchen', {
    url: '/ikitchen',
    views: {
      'tab-ikitchen': {
        templateUrl: 'templates/tab-ikitchen.html',
        controller: 'ikitchenCtrl'
      }
    }
  })
//流行菜谱
  .state('ikitchen-popular', {
    url: '/ikitchen/weekly_popular',
    templateUrl: 'templates/ikitchen-popular.html',
    controller: 'PopulCtrl'
  })
//创建菜谱名
  .state('create', {
    url: '/create/name',
    templateUrl: 'templates/create-name.html',
    controller: 'CreateNameCtrl'
  })
//创建菜谱详情
  .state('create-detail', {
    url: '/create/detail',
    templateUrl: 'templates/create-detail.html',
    controller: 'CreateNameCtrl'
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-create': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/tab/ikitchen');

});
