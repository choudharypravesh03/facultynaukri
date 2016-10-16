(function () {
    'use strict';

    angular
        .module('app.core')
        .config(appConfig);

    var config = {
        appErrorPrefix: '[Facultynaukri Error] ',
        appTitle: 'Facultynaukri'
    };

    appConfig.$inject = ['routerHelperProvider'];
    /* @ngInject */
    function appConfig (routerHelperProvider) {
        routerHelperProvider.configure({mainTitle: config.appTitle});
    }

})();
