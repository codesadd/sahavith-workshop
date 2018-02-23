angular.module('starterApp', ['ngRoute','ngTable','ngSanitize','firebase']).config(ApplicationConfig);

function ApplicationConfig($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
  }).when('/profile', {
    templateUrl: 'component/profile.html',
    controller: 'profileController as el'
  }).when('/register', {
    templateUrl: 'component/register.html',
    controller: 'registerController'
  }).when('/', {
    templateUrl: 'component/home.html',
    controller: 'homeController as el'
  }).otherwise({
    redirectTo: '/'
  });

  // use the HTML5 History API
  $locationProvider.html5Mode(false).hashPrefix(''); 
}