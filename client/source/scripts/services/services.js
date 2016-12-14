angular.module('naukriApp')

    .factory('GetSubjectsList', function($http) {
        return {
            getSubjects: function() {
                return $http({
                    method: 'GET',
                    url: '/getSubjects',
                    data: '',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function(response, status, headers, config) {
                        console.log(response)
                        return response;
                    })
                    .error(function(err, status, headers, config) {
                        console.log(err);
                        return err;
                    })
            }
        }
    })

    .factory('GetCities', function($http) {
        return {
            getCities: function() {
                return $http({
                    method: 'GET',
                    url: '/getCities',
                    data: '',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function(response, status, headers, config) {
                        console.log(response)
                        return response;
                    })
                    .error(function(err, status, headers, config) {
                        console.log(err);
                        return err;
                    })
            }
        }
    })



    .factory('AddJobSeeker', function($http) {
        return {
            addJobSeeker: function(data) {
                return $http({
                    method: 'POST',
                    url: '/addJobSeeker',
                    data: 'jobseeker='+data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function(response) {
                        return response;
                    })
                    .error(function(err) {
                        console.log(err);
                        return err;
                    })
            }
        }
    })
