angular.module('naukriApp')

    .factory('GetSubjectsList', function($http) {
        return {
            getSubjects: function(type) {
                return $http({
                    method: 'GET',
                    url: '/getSubjects?subject_type='+type,
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

    .factory('GetJobSeeker', function($http) {
        return {
            getJobSeeker: function() {
                return $http({
                    method: 'GET',
                    url: '/getJobSeeker',
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
            getCities: function(state_id) {
                return $http({
                    method: 'GET',
                    url: '/getCity?state_id='+state_id,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function(response, status, headers, config) {
                        return response;
                    })
                    .error(function(err, status, headers, config) {
                        console.log(err);
                        return err;
                    })
            }
        }
    })


    .factory('GetStates', function($http) {
        return {
            getStates: function() {
                return $http({
                    method: 'GET',
                    url: '/getStates',
                    data: '',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function(response, status, headers, config) {
                        return response;
                    })
                    .error(function(err, status, headers, config) {
                        console.log(err);
                        return err;
                    })
            }
        }
    })


    .factory('GetCitiesQuery', function($http) {
        return {
            getCities: function(data) {
                return $http.get("../../jsons/cities.json?")
                    .success(function(response) {
                        return response.data;
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


    .factory('AddRecruiter', function($http) {
        return {
            addRecruiter: function(data) {
                return $http({
                    method: 'POST',
                    url: '/addRecruiter',
                    data: 'recruiter='+data,
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


    .factory('AddExperience', function($http) {
        return {
            addExperience: function(data) {
                return $http({
                    method: 'POST',
                    url: '/addExperience',
                    data: 'experience='+data,
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

    .factory('UpdateExperience', function($http) {
        return {
            updateExperience: function(data) {
                return $http({
                    method: 'POST',
                    url: '/updateExperience',
                    data: 'experience='+data,
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


    .factory('GetExperience', function($http) {
        return {
            getExperience: function() {
                return $http({
                    method: 'GET',
                    url: '/getExperiences',
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


    .factory('EditSubject', function ($http) {
        return {
            editVacancies: function(data) {
                return $http({
                    method: 'POST',
                    url: '/updateSubjectVacancies',
                    data : 'subject='+data,
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

    .factory('AddSubject', function ($http) {
        return {
            addSubject: function(data) {
                return $http({
                    method: 'POST',
                    url: '/addSubject',
                    data : 'subject='+data,
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


    .factory('Login', function($http) {
        return {
            login: function(data) {
                return $http({
                    method: 'GET',
                    url: '/u/login?jobseeker_login='+JSON.stringify(data),
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

    .service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            fd.append('file', file);

            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })

                .success(function(){
                })

                .error(function(){
                });
        }
    }]);

