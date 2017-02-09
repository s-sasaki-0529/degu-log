/*
  AngularJS側のコアモジュール
*/
const degulog = angular.module('degulog', ['ngRoute']);

/*
  [ルーティング] SPAルーティング
*/
degulog.config(function($routeProvider) {
  /* ブログ */
  $routeProvider
  .when('/blog' , {
    redirectTo: '/blog/posts'
  })
  .when('/blog/create' , {
    templateUrl: 'views/blog/edit.html',
    controller: 'blogEditController as blogEdit'
  })
  .when('/blog/create/:_id' , {
    templateUrl: 'views/blog/edit.html',
    controller: 'blogEditController as blogEdit'
  })
  .when('/blog/posts' , {
    templateUrl: 'views/blog/posts.html',
    controller: 'blogListController as blogList'
  })
  .when('/blog/calendar' , {
    templateUrl: 'views/blog/calendar.html',
    controller: 'blogCalendarController as blogCalendar'
  })
  /* 体重 */
  .when('/weight' , {
    redirectTo: 'weight/history'
  })
  .when('/weight/create' , {
    templateUrl: 'views/weight/edit.html',
    controller: 'weightEditController as weightEdit'
  })
  .when('/weight/create/:_id' , {
    templateUrl: 'views/weight/edit.html',
    controller: 'weightEditController as weightEdit'
  })
  .when('/weight/history' , {
    templateUrl: 'views/weight/history.html',
    controller: 'weightHistoryController as weightHistory'
  })
  .when('/weight/graf' , {
    templateUrl: 'views/weight/graf.html',
    controller: 'weightGrafController as weightGraf'
  })
  /* 購入履歴 */
  .when('/bought' , {
    redirectTo: 'bought/history'
  })
  .when('/bought/create' , {
    templateUrl: 'views/bought/edit.html'
  })
  .when('/bought/history' , {
    templateUrl: 'views/bought/history.html'
  })
  .when('/bought/graf' , {
    templateUrl: 'views/bought/graf.html'
  })
  /* 写真 */
  .when('/photo' , {
    redirectTo: 'photo/collection'
  })
  .when('/photo/create' , {
    templateUrl: 'views/photo/edit.html'
  })
  .when('/photo/collection' , {
    templateUrl: 'views/photo/collection.html'
  })
  .when('/photo/tag' , {
    templateUrl: 'views/photo/tag.html'
  })
  /* その他 */
  .otherwise({
    redirectTo: '/blog/posts'
  })
});