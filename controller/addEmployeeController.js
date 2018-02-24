(function () {
    angular.module('starterApp').controller('addEmployeeController', ['$http', '$scope','functionService',
        addEmployeeController
    ]);

    function addEmployeeController($http, $scope, functionService) {
        var self = this;
        self.addNewEmp = addNewEmp


        function addNewEmp(params) {
            functionService.addEmp(params)
        }
    }
})();