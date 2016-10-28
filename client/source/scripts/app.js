var naukriApp = angular.module('naukriApp', [
    'ui.router',
    'ui.bootstrap'
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

}])
