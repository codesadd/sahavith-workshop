(function () {
  angular.module('starterApp').controller('homeController', ['$http', '$scope', 'functionService', '$location',
    homeController
  ]);

  function homeController($http, $scope, functionService, $location) {
    var self = this;
    self.login = login

    function login(user, pass) {
      $location.path("/profile");
    }
    
    $scope.database = functionService.checkConFirebase();
    console.log($scope.database);
    
  }
})();