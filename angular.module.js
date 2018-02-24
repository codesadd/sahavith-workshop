angular.module('starterApp', ['ngRoute','ngTable','ngSanitize','firebase']).config(ApplicationConfig);

function ApplicationConfig($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
  }).when('/dashboard', {
    templateUrl: 'component/dashboard.html',
    controller: 'dashboardController as el'
  }).when('/add-employee', {
    templateUrl: 'component/add-employee.html',
    controller: 'addEmployeeController as el'
  }).when('/', {
    templateUrl: 'component/home.html',
    controller: 'homeController as el'
  }).otherwise({
    redirectTo: '/'
  });

  // use the HTML5 History API
  $locationProvider.html5Mode(false).hashPrefix(''); 
}