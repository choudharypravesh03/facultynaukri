angular.module('naukriApp')
    .controller('LoginController', function($http, $scope, $rootScope, Login) {

        $rootScope.init();

        $scope.login = {
            jobseeker_email: "",
            jobseeker_password: ""
        }

        $scope.loginService = function() {
            Login.login($scope.login).success(function(response) {
                console.log(response);
                if(response.status) {
                    var loginData = JSON.stringify({
                        is_logged_in: true,
                        id_crypt: response.data.id_crypt,
                        user_email: response.data.jobseeker_email
                    });
                    $scope.setCookie('userData', loginData, function(s) {
                        if(s) {
                            if($scope.login.jobseeker_email == 'siddmishra99@gmail.com')
                                window.location.href = "/admin/edit";
                            else
                                window.location.href = "/";
                        } else {
                            alert("Some error occurred please try again!")
                        }
                    });
                } else {
                    alert("Username and password do not match!");
                }
            })
        }


        $('#login-form').validate({
            rules: {
                j_email: {
                    email: true,
                    required: true
                },
                j_password: {
                    required: true
                }
            },
            messages: {
                j_email: {
                    email: "Please provide a valid email address",
                    required: "Email id is required for login"
                },
                j_password: {
                    required: "Please enter the password"
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'div',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.closest('.input-group').length) {
                    error.insertAfter(element.closest('.input-group'));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function(form) {
                $scope.loginService();
            }
        });


        /*COOKIE GET SET FUNCTIONS*/
        $scope.setCookie = function(cname, cvalue, callback) {
            document.cookie = cname + "=" + cvalue + ";path=/;domain:localhost;";
            callback(true);
        }

    })
