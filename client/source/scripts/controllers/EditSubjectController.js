/**
 * Created by aman on 17/12/16.
 */
angular.module('naukriApp')
    .controller('EditSubjectController', function($http, $scope, $rootScope, GetSubjectsList, EditSubject) {

        $rootScope.init();


        $scope.editedSubject = {
            subject_id : "",
            subject_vacancies : ""
        }



        $scope.levelChanged = function (index) {
            $scope.levelType = index;
            GetSubjectsList.getSubjects(index).success(function (response) {
                $scope.subjectsList = response.data;
            })
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

                $('#update-vacancies-submit').text("Please Wait...").prop('disabled', true);

                console.log($scope.editedSubject.subject_id)

                var data = {
                    subject_id: $scope.editedSubject.subject_id,
                    subject_vacancies: $scope.editedSubject.subject_vacancies
                }

                console.log(data);

                EditSubject.editVacancies(JSON.stringify(data)).success(function (response) {
                    $('#update-vacancies-submit').text("Update Vacancies").prop('disabled', false);
                    if (response.status) {
                        $("#edit-subject-success-modal").modal()
                    }
                    console.log(response)
                })
            }
        })

        $scope.goToAdminHome = function () {
            window.location.href = '/admin/edit'
        }

    })
