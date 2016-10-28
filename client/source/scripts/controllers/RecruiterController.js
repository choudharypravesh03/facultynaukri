


angular.module('naukriApp')
.controller('RecruiterController', function($scope, $http) {
    /*-----------------VALIDATIONS-----------------------------*/

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
    }, "Value must not equal arg.");

    $('#recruiter-form').validate({
        rules: {
            r_firstname: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            r_lastname: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            r_email: {
                email: true,
                required: true
            },
            r_contact: {
                number: true,
                required: true
            },
            r_institute_type: {
                required: true
            },
            r_institute: {
                required: true
            },
            r_institute_address: {
                required: true
            },
            r_requirement: { valueNotEquals: "default" },
            r_subject: { valueNotEquals: "default" },
            r_city: { valueNotEquals: "default" },
            r_standard: { valueNotEquals: "default" }
        },
        messages: {
            r_city: { valueNotEquals: "Please select an item!" }
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
})
