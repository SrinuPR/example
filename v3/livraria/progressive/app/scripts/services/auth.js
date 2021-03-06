'use strict';

app.factory('AuthService', ['$http', 'AppService', '$rootScope', '$interval', '$window',
    function ($http, AppService, $rootScope, $interval, $window) {

        var authService = {};

        authService.change = function (credentials) {

            return $http
                    .post('api/auth/change', credentials)
                    .success(function (res, status, headers) {

                        return res;
                    }).error(function (res, status, headers) {
                return res;
            }
            );

        };

        authService.login = function (credentials) {
            AppService.removeToken();
            return $http({
                url: 'api/auth',
                method: "POST",
                data: credentials
            }).then(function (res) {
                console.log(res);
                AppService.setToken(res.key);
                $rootScope.currentUser = AppService.getUserFromToken();
                return res;
            }
            );
        };

        authService.aminesia = function (credentials) {

            return $http
                    .post('api/auth/aminesia', credentials)
                    .success(function (res, status, headers) {

                        return res;
                    }).error(function (res, status, headers) {
                return res;
            }
            );

        };

        authService.register = function (credentials) {

            return $http
                    .post('api/auth/register', credentials)
                    .success(function (res) {
                        return res;
                    }).error(function (res) {
                return res;
            });

        };

        authService.retoken = function () {
            return $http
                    .get('api/auth')
                    .success(function (res, status, headers) {
                        AppService.removeToken();
                        AppService.setToken(res.key);
                        $rootScope.currentUser = AppService.getUserFromToken()
                        $rootScope.$digest();
                        return res;
                    }
                    );
        };

        $interval(function () {
            if ($rootScope.currentUser) {
                authService.retoken();
            }
        }, 6000000);

        authService.logout = function () {
            AppService.removeToken();
        };

        authService.isAuthenticated = function () {
            if (!$rootScope.currentUser) {
                $rootScope.currentUser = AppService.getUserFromToken();
            }
            return $rootScope.currentUser ? true : false;
        };

        authService.isAuthorized = function (authorizedRoles) {

            if (authService.isAuthenticated()) {

                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }

                var hasAuthorizedRole = false;

                var perfil = $rootScope.currentUser.roles;

                if (perfil !== undefined && perfil !== null) {
                    for (var i = 0; i < authorizedRoles.length; i++) {
                        for (var p = 0; p < perfil.length; p++) {
                            if (authorizedRoles[i] === perfil[p]) {
                                hasAuthorizedRole = true;
                                break;
                            }
                        }
                    }
                }
            } else {
                return false;
            }

            return hasAuthorizedRole;
        };

        return authService;
    }
]);