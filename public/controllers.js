(function() {

    'use strict';

    angular.module('app.module')
        .controller('MainController', MainController);

    function MainController($scope) {

        $scope.entrar = entrar;

        function init() {
            console.log("MainController");
        }
        init();

        function entrar() {
            console.log("Entrando...");
        }
    }
})();