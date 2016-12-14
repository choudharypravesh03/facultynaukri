


angular.module('naukriApp')
.controller('RecruiterController', function($scope, $http, $rootScope, GetSubjectsList, GetCities, AddRecruiter) {

    $rootScope.init();

    $scope.recruiter = {
        recruiter_firstname: "",
        recruiter_lastname: "",
        recruiter_email: "",
        recruiter_contact: "",
        institution_type_id: "",
        institution_name: "",
        institute_address1: "",
        institute_address2: "",
        institute_pincode: "",
        institution_city_id: "",
        institution_requirement_ids: "",
        institution_subject_req_ids: "",
        institution_req_level: ""
    }


    $scope.interestedin = [
        {value: 1, name: "Teaching"},
        {value: 2, name: "Management"},
        {value: 3, name: "Marketing"},
        {value: 4, name: "Admin"}
    ] /*{value: 5, name: "Others"}*/


    $scope.standards = [
        {value: 1, name: "10th"},
        {value: 2, name: "12th"}
    ] /*{value: 3, name: "Others"}*/

    /*---------------------SERVICE TO GET SUBJECTS DATA------------------------*/

    GetSubjectsList.getSubjects().success(function(response, status, headers, config) {
        $scope.subjectsList = response.data;
    })

    /*-------------------------------------------------------------------------*/


    /*---------------------SERVICE TO GET CITIES DATA------------------------*/

    GetCities.getCities().success(function(response) {
        console.log(response.cities);
        $scope.citiesList = response.cities;
    })

    /*------------------------------------------------------------------------*/


    $scope.goToHome = function () {
        $('#jobseeker-success-modal').modal('hide');
        window.location.href = '/';
    }



    /*-----------------VALIDATIONS-----------------------------*/

    $.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return value !== null;
    }, "Value must not equal arg.");

    $('#recruiter-form').validate({
        rules: {
            r_firstname: {
                minlength: 3,
                required: true
            },
            r_lastname: {
                minlength: 3,
                required: true
            },
            r_email: {
                email: true,
                required: true
            },
            r_contact: {
                number: true,
                required: true,
                maxlength: 10,
                minlength: 10
            },
            r_institute_type: {
                required: true
            },
            r_institute: {
                required: true
            },
            r_institute_address1: {
                required: true
            },
            r_institute_pin: {
                required: true,
                number: true
            },
            r_city: { valueNotEquals: "" }
        },
        messages: {
            r_firstname: {
                required: "First Name is required",
                minlength: "First name cannot be less then 3 letters"
            },
            r_lastname: {
                required: "Last Name is required",
                minlength: "Last name cannot be less then 3 letters"
            },
            r_email: {
                required: "Email address is required to have furthur communication",
                email: "Please provide a valid email address"
            },
            r_contact: {
                number: "Provide with your 10 digit mobile number for furthur communication",
                minlength: "Provide with your 10 digit mobile number for furthur communication",
                maxlength: "Provide with your 10 digit mobile number for furthur communication",
                required: "Provide with your 10 digit mobile number for furthur communication"
            },
            r_institute_type: {
                required: "Please select institute type you have requirement in"
            },
            r_institute: {
                required: "Please provide name of your institution"
            },
            r_institute_address1: {
                required: "Address of institute is required"
            },
            r_institute_pin: {
                required: "Please provide a valid pincode",
                number: "Please provide a valid pincode"
            },
            r_city: { valueNotEquals: "Please select your city" }
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

            var data = {
                recruiter_name: $scope.recruiter.recruiter_firstname.toLowerCase().trim()+" "+$scope.recruiter.recruiter_lastname.toLowerCase().trim(),
                recruiter_email: $scope.recruiter.recruiter_email.toLowerCase().trim(),
                recruiter_contact: $scope.recruiter.recruiter_contact,
                institution_type_id: $scope.recruiter.institution_type_id,
                institution_name: $scope.recruiter.institution_name,
                institution_address: $scope.recruiter.institute_address1+ " " +$scope.recruiter.institute_address2,
                institution_pincode: $scope.recruiter.institute_pincode,
                institution_city_id: $scope.recruiter.institution_city_id,
                institution_requirement_ids: $scope.recruiter.institution_requirement_ids.toString(),
                institution_subject_req_ids: $scope.recruiter.institution_subject_req_ids.toString(),
                institution_req_level: $scope.recruiter.institution_req_level.toString()
            }

            console.log(data);

            AddRecruiter.addRecruiter(JSON.stringify(data)).success(function(response) {
                $('#jobseeker-submit').text("Register Now").prop('disabled', false);
                if(response.status) {
                    $("#recruiter-success-modal").modal()
                }
                console.log(response)
            })
        }
    });
})
