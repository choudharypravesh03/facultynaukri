var naukriApp = angular.module('naukriApp', [
    'ui.router',
    'ui.bootstrap',
    'ui.multiselect',
    'ngTagsInput'
]);

naukriApp.config(['$stateProvider', '$locationProvider',
    function($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('jobseeker-create', {
                url: '/jobseeker/new',
                templateUrl: '/views/body/jobseeker-create.ejs',
                controller: 'JobseekerController'
            })
            .state('recruiter-create', {
                url: '/recruiter/new',
                templateUrl: '/views/body/recruiter-create.ejs',
                controller: 'RecruiterController'
            })
            .state('jobseeker-login', {
                url: '/login',
                templateUrl: '/views/body/login.ejs',
                controller: 'LoginController'
            })
            .state('home', {
                url: '/',
                templateUrl: '/views/body/home.ejs',
                controller: 'HomeController'
            })
            .state('edit-profile', {
                url: '/jobseeker/edit-profile',
                templateUrl: '/views/body/edit-profile.ejs',
                controller: 'EditProfileController'
            })
            .state('edit-subject-panel', {
                url: '/admin/edit',
                templateUrl: '/views/body/edit-subject-panel.ejs',
                controller: 'EditSubjectController'
            })
            .state('add-subject-panel', {
                url: '/admin/add',
                templateUrl: '/views/body/add-subject-panel.ejs',
                controller: 'AddSubjectController'
            })

}])

naukriApp.constant('_',
    window._
);


naukriApp.run(function($rootScope) {

    $rootScope.init = function() {
        console.log(getCookie('userData') == "");
        if(getCookie('userData') !== "") {
            var userData = JSON.parse(getCookie('userData'));
            console.log(userData.is_logged_in);
            if(userData.is_logged_in) {
                $('.sign-in-links').hide();
                $('.logged-in-links').show();
            } else {
                $('.sign-in-links').show();
                $('.logged-in-links').hide();
            }
        } else {
            $('.sign-in-links').show();
            $('.logged-in-links').hide();
        }
    };

    $rootScope.logout = function() {
        deleteAllCookies();

        $('.sign-in-links').show();
        $('.logged-in-links').hide();

        window.location.href = "/";

    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                var r = decodeURI(c.substring(name.length, c.length));
                r = r.replace(/%3A/g, ":")
                r = r.replace(/%2C/g, ",")
                r = r.replace(/%40/g, "@")
                return r
            }
        }
        return "";
    }


    function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            console.log("Cookie")
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
});
