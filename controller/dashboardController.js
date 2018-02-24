(function () {
    angular.module('starterApp').controller('dashboardController', ['$http', '$scope','NgTableParams','functionService',
    dashboardController
    ]);

    function dashboardController($http, $scope,NgTableParams, functionService) {
        var self = this;
        $scope.begin = "This Profile page";

        var database = functionService.checkConFirebase();
        $scope.database = database
        $scope.bntAdd = true;
        $scope.showAddBtn = function () {
            $scope.bntAdd = !$scope.bntAdd;
        }
    }
})();