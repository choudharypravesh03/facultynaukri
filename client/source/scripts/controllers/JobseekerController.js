

angular.module('naukriApp')
.controller('JobseekerController', function($http, $scope, GetSubjectsList, GetCities, AddJobSeeker) {


    $scope.jobseeker = {
        jobseeker_firstname: "",
        jobseeker_lastname: "",
        jobseeker_email: "",
        jobseeker_password: "",
        jobseeker_password_confirm: "",
        jobseeker_contact: "",
        jobseeker_dob: "",
        jobseeker_gender: "",
        jobseeker_interested_in: "",
        jobseeker_city: ""
    }


    $scope.interestedin = [
        {value: 1, name: "Teaching"},
        {value: 2, name: "Management"},
        {value: 3, name: "Marketing"},
        {value: 4, name: "Admin"},
        {value: 5, name: "Others"}
    ]



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






    /*-----------------VALIDATIONS-----------------------------*/

    $.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return value !== null;
    }, "Value must not equal arg.");

    $('form').validate({
        rules: {
            j_firstname: {
                minlength: 3,
                required: true
            },
            j_lastname: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            j_email: {
                email: true,
                required: true
            },
            j_password: {
                minlength: 6,
                required: true
            },
            j_contact: {
                number: true,
                required: true
            },
            j_dob: {
                date: true,
                required: true
            },
            j_gender: {
                required: true
            },
            j_interest: { valueNotEquals: "" },
            j_subject_name: {
                required: {
                    depends: function(element) {
                        return $scope.jobseeker.jobseeker_subject_id !== 100;
                    }
                }
            },
            j_city: { valueNotEquals: "" }
        },
        messages: {
            j_firstname: {
              required: "First Name is required",
              minlength: "First name cannot be less then 3 letters"
            },
            j_lastname: {
                required: "Last Name is required",
                minlength: "Last name cannot be less then 3 letters"
            },
            j_email: {
                required: "Email address is required to have furthur communication",
                email: "Please provide a valid email address"
            },
            j_password: {
                minlength: "Password must be minimum 6 characters long",
                required: "Provide a password for generating login credentials"
            },
            j_contact: {
                number: "Provide a valid number to contact you",
                required: "Provide with contact number for furthur communication"
            },
            j_dob: {
                date: "Please provide a valid Date of Birth",
                required: "Please provide your Date of Birth"
            },
            j_gender: {
                required: "Please choose an appropriate option"
            },
            j_interest: { valueNotEquals: "Please select a Subject" },
            j_city: { valueNotEquals: "Please select your preferred city" }
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

            $('#jobseeker-submit').text("Please Wait...").prop('disabled', true);

            var dob = new Date($scope.jobseeker.jobseeker_dob);
            dob = dob.getTime();

            var data = {
                jobseeker_name: $scope.jobseeker.jobseeker_firstname.toLowerCase().trim()+ " "+$scope.jobseeker.jobseeker_lastname.toLowerCase().trim(),
                jobseeker_email: $scope.jobseeker.jobseeker_email.toLowerCase().trim(),
                jobseeker_password: $scope.jobseeker.jobseeker_password,
                jobseeker_contact: $scope.jobseeker.jobseeker_contact,
                jobseeker_dob: dob,
                jobseeker_gender: $scope.jobseeker.jobseeker_gender,
                jobseeker_interested_in: $scope.jobseeker.jobseeker_interested_in,
                jobseeker_city: $scope.jobseeker.jobseeker_city
            }

            console.log(data);

            AddJobSeeker.addJobSeeker(JSON.stringify(data)).success(function(response) {
                $('#jobseeker-submit').text("Register Now").prop('disabled', false);
                if(response.status) {
                    $("#jobseeker-success-modal").modal()
                }
                console.log(response)
            })
            //form.submit();
        }
    });

    /*-------------------------------------------------------------------------------------*/



    $scope.goToLogin = function() {
        $('#jobseeker-success-modal').modal('hide');
        window.location.href = '/login';
    }












   /*-------------------- DATE --------------------------*/


    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    /*-------------------- DATE --------------------------*/


})
