(function () {

    'use strict';

    angular.module('user.module')
        .service('UserService', UserService);

    function UserService() {
        return {
            getInfo: getInfo
        }

        function getInfo(user) {
            console.log(user);
        }
    }
})();