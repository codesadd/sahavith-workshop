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
        var ref = firebase.database().ref('demo');
        var obj = []
        return {
            checkConFirebase: checkConFirebase,
            addEmp: addEmp
        };

        function checkConFirebase() {
            return $firebaseArray(ref)
        }

        function addEmp(params) {
            $firebaseArray(ref).$add(params)
        }
    }
})();