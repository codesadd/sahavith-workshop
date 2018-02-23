(function () {
    angular.module('starterApp').controller('profileController', ['$http', '$scope','NgTableParams',
        profileController
    ]);

    function profileController($http, $scope,NgTableParams) {
        var self = this;
        $scope.begin = "This Profile page";

        var data = [{name: "Moroni", age: 50},
                {name: "Simon", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Christian", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27}
            ];
        this.tableParams = new NgTableParams({ count: 5}, { counts: [5, 10, 25], dataset: data});
    }
})();