/**
 * Created by aman on 17/12/16.
 */
angular.module('naukriApp')
    .controller('AddSubjectController', function($http, $scope, $rootScope, GetSubjectsList, AddSubject) {

        $rootScope.init();


        $scope.addedSubject = {
            subject_type : "",
            subject_name : "",
            subject_vacancies : ""
        }



        $scope.levelChanged = function (index) {
            $scope.levelType = index;
        }



        $.validator.addMethod("valueNotEquals", function(value, element, arg) {
            return value !== null;
        }, "Value must not equal arg.");

        $('form').validate({
            rules: {
                sub_level: {
                    valueNotEquals : ""
                },
                sub_subject: {
                    valueNotEquals : ""
                },
                sub_vacancies: {
                    required: true,
                    number : true
                }
            },
            messages: {
                sub_level: {
                    required: "Level is required"
                },
                sub_subject: {
                    required: "Please select the subject"
                },
                sub_vacancies: {
                    required: "Vacancies cannot be left blank",
                    number : "Vacancies should be a number"
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

                $('#add-subject-submit').text("Please Wait...").prop('disabled', true);

                console.log($scope.addedSubject.subject_name)

                var data = {
                    subject_type : $scope.levelType,
                    subject_name: $scope.addedSubject.subject_name,
                    subject_vacancies: $scope.addedSubject.subject_vacancies
                }

                console.log(data);

                AddSubject.addSubject(JSON.stringify(data)).success(function (response) {
                    $('#add-subject-submit').text("Add Subject").prop('disabled', false);
                    if (response.status) {
                        $("#add-subject-success-modal").modal()
                    }
                    console.log(response)
                })
            }
        })

    })
