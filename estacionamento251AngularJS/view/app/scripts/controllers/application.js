'use strict';

app.controller('ApplicationController', ['$rootScope', '$notification', '$websocket', '$timeout', 'USER_ROLES', 'AuthService', 'LAYOUTS',
    function ($rootScope, $notification, $websocket, $timeout, USER_ROLES, AuthService, LAYOUTS) {

        $rootScope.qtde = "0";

        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        var wsUrl;

        if (window.location.protocol == 'https:') {
            wsUrl = 'wss://' + window.location.host + ':8443/ws/echo';
        } else {
             wsUrl = 'ws://' + window.location.host + ':8000/ws/echo';
            //wsUrl = 'ws://localhost:8080/ws/echo';
        }

        var ws = $websocket.$new({
            url: wsUrl, protocols: [], subprotocols: ['base46']
        });

        ws.$on('$open', function () {
            ws.$emit("qtde", "qtde");
            $rootScope.conectado = true;
            console.log("WS ON");
        });

        ws.$on('$close', function () {
            ws.$emit("qtde", "qtde");
            $rootScope.conectado = false;
            console.log("WS OFF");
        });

        ws.$on('$error', function () {
            $rootScope.conectado = false;
            console.log("WS ERROR");
        });

        ws.$on('$message', function (emit) {

            if (emit.event === "Acessando") {
                $rootScope.qtde = emit.data;
            }

            $notification(emit.event, {
                body: emit.data
            });

            if (navigator.vibrate) {
                navigator.vibrate([1000, 500, 1000, 500, 2000]);
            }
            ;

        });

        $rootScope.userRoles = USER_ROLES;
        $rootScope.isAuthorized = AuthService.isAuthorized;
        $rootScope.bootstraps = LAYOUTS;

        // set the default bootswatch name
        $rootScope.css = AuthService.getCss();

        $rootScope.setCss = function (css) {
            AuthService.setCss(css);
        };


//        $notification('Estacionamento', {
//            body: 'Retire seu carro.',
//            focusWindowOnClick: true
//        });


    }]);
