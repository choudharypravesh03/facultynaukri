

angular.module('naukriApp')
.controller('JobseekerController', function($http, $scope, GetSubjectsList, GetCities) {


    $scope.jobseeker = {
        subject: "",
        city: ""
    }




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

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
    }, "Value must not equal arg.");

    $('form').validate({
        rules: {
            j_firstname: {
                minlength: 3,
                maxlength: 15,
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
                valueNotEquals: "default"
            },
            j_gender: {
                required: true
            },
            j_interest: { valueNotEquals: "default" },
            j_city: { valueNotEquals: "default" }
        },
        messages: {
            j_interest: { valueNotEquals: "Please select an item!" },
            j_city: { valueNotEquals: "Please select an item!" },
            j_dob: {  required: "This field is empty"  }
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
        }
    });















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
