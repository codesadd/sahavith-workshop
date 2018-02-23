(function () {
    'use strict';

    angular.module('starterApp')
        .service('functionService', ['$q', '$http', '$firebaseObject', '$firebaseArray', funcService]);

    function funcService($q, $http, $firebaseObject, $firebaseArray) {
        var self = this;
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBzBcDquQOv7MqkY-aexHNjsiHZUuX3f80",
            authDomain: "hello-world-sahavith.firebaseapp.com",
            databaseURL: "https://hello-world-sahavith.firebaseio.com",
            projectId: "hello-world-sahavith",
            storageBucket: "",
            messagingSenderId: "1094524219576"
        };
        firebase.initializeApp(config);
        var database = firebase.database()
        return {
            sum: sum,
            checkConFirebase: checkConFirebase
        };

        function checkConFirebase() {
            var ref = firebase.database().ref();
            return $firebaseObject(ref);
        }

        function sum(param1, param2) {
            var result = parseInt(param1) + parseInt(param2)
            return result
        }
    }
})();