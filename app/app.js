"use strict";

var app = angular.module("ShroomApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: "partials/shrooms.html",
    controller: 'ShroomCtrl'
  }).
  otherwise('/');
});


