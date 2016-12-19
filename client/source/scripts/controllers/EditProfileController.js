angular.module('naukriApp')
    .controller('EditProfileController', function($http, $scope, $rootScope,
                                                  GetSubjectsList, GetCities,
                                                  AddJobSeeker, AddExperience,
                                                  fileUpload, GetExperience, GetStates,
                                                  GetJobSeeker, GetCitiesById, GetStatebyId) {

        $rootScope.init();
        $scope.jobseekerData = {};
        $scope.jobseeker = {};



        $scope.resumeFile = "";

        $scope.experience = {
            experience_designation: "",
            experience_institution_name: "",
            experience_duration: "",
            experience_is_current: "",
            experience_notice_period: ""
        }

        $scope.citiesList = [];
        $scope.citiesListCurrent = [];
        $scope.citiesListPermanent = [];


        $scope.interestedin = [
            {value: 1, name: "Teaching"},
            {value: 2, name: "Management"},
            {value: 3, name: "Marketing"},
            {value: 4, name: "Admin"},
            {value: 5, name: "Others"}
        ]

        $scope.levelsList = [
            {value: 1, name: "10th"},
            {value: 2, name: "12th"},
            {value: 3, name: "Other"}
        ];


        /*---------------------SERVICE TO GET SUBJECTS DATA------------------------*/

        GetExperience.getExperience().success(function(response, status, headers, config) {
            $scope.experienceList = response.data;
        })

        /*-------------------------------------------------------------------------*/





        /*---------------------SERVICE TO GET SUBJECTS DATA------------------------*/

        GetJobSeeker.getJobSeeker().success(function(response, status, headers, config) {
            console.log(response);
            $scope.jobseekerData = response.data[0];

            var firstname = toTitleCase($scope.jobseekerData.jobseeker_name.split(" ")[0]);
            var lastname = toTitleCase($scope.jobseekerData.jobseeker_name.split(" ")[1]);
            var date = new Date(Number($scope.jobseekerData.jobseeker_dob));
            console.log(date);

            GetCitiesById.getCitiesById(Number($scope.jobseekerData.jobseeker_city)).success(function(response) {
                console.log(response);
            })


            $scope.jobseeker = {
                jobseeker_firstname: firstname,
                jobseeker_lastname: lastname,
                jobseeker_email: $scope.jobseekerData.jobseeker_email,
                jobseeker_password: $scope.jobseekerData.jobseeker_password,
                jobseeker_password_confirm: $scope.jobseekerData.jobseeker_password,
                jobseeker_contact: $scope.jobseekerData.jobseeker_contact,
                jobseeker_dob: date,
                jobseeker_gender: $scope.jobseekerData.jobseeker_gender,
                jobseeker_interested_in: $scope.jobseekerData.jobseeker_interested_in,
                jobseeker_interested_in_name: "",
                jobseeker_state: $scope.jobseekerData.jobseeker_state,
                jobseeker_city: $scope.jobseekerData.jobseeker_city,
                jobseeker_permanent_address: $scope.jobseekerData.jobseeker_permanent_address,
                jobseeker_state_permanent: "",
                jobseeker_permanent_city: $scope.jobseekerData.jobseeker_permanent_city,
                jobseeker_permanent_pincode: $scope.jobseekerData.jobseeker_permanent_pincode,
                jobseeker_current_address: $scope.jobseekerData.jobseeker_current_address,
                jobseeker_state_current: "",
                jobseeker_current_city: $scope.jobseekerData.jobseeker_current_city,
                jobseeker_current_pincode: $scope.jobseekerData.jobseeker_current_pincode,
                jobseeker_marital_status: $scope.jobseekerData.jobseeker_marital_status,
                jobseeker_level: $scope.jobseekerData.jobseeker_level,
                jobseeker_subject_id: $scope.jobseekerData.jobseeker_subject_id,
                jobseeker_level_class_id: $scope.jobseekerData.jobseeker_level_class_id,
                jobseeker_level_class_name: "",
                jobseeker_is_experienced: "",
                jobseeker_current_ctc: $scope.jobseekerData.jobseeker_current_ctc,
                jobseeker_expected_ctc: $scope.jobseekerData.jobseeker_expected_ctc,
                jobseeker_preferred_job_location: $scope.jobseekerData.jobseeker_preferred_job_location,
                jobseeker_resume: "",
                jobseeker_remarks: $scope.jobseekerData.jobseeker_remarks
            }
        })

        /*-------------------------------------------------------------------------*/


        /*---------------------SERVICE TO GET STATES DATA------------------------*/

        GetStates.getStates().success(function(response, status, headers, config) {
            $scope.statesList = response.data;
        })

        /*-------------------------------------------------------------------------*/




        /*-----------------VALIDATIONS-----------------------------*/

        $.validator.addMethod("valueNotEquals", function(value, element, arg) {
            return value !== null;
        }, "Value must not equal arg.");

        $.validator.setDefaults({
            ignore: [],
            // any other default options and/or rules
        });

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
                j_intereseted_in_name: {
                    required: {
                        depends: function(element) {
                            return $scope.jobseeker.jobseeker_interested_in == '5';
                        }
                    }
                },
                j_subject_name: {
                    required: {
                        depends: function(element) {
                            return $scope.jobseeker.jobseeker_subject_id !== 100;
                        }
                    }
                },
                j_state: { valueNotEquals: "" },
                j_city: { valueNotEquals: "" },
                j_permanent_address: {
                    minlength: 10
                },
                j_permanent_pincode: {
                    minlength: 6
                },
                j_current_address: {
                  minlength: 10
                },
                j_current_pincode: {
                    minlength: 6
                },
                j_current_ctc: {
                    number: true
                },
                j_expected_ctc: {
                    number: true
                },
                j_remarks: {
                    minlength: 10,
                    required: false
                }
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
                j_city: { valueNotEquals: "Please select your preferred city" },
                j_state: { valueNotEquals: "Please select your state" },
                j_current_ctc: {
                    number: "Provide a valid current CTC"
                },
                j_expected_ctc: {
                    number: "Provide a valid expected CTC"
                },
                j_remarks: {
                    minlength: "Please explain a little bit more"
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
            invalidHandler: function(event, validator) {
                console.log("invalid")
                console.log(event);
                console.log(validator);

                /*if($('#jobseeker-edit-1').find('div.has-error').length !== 0) {
                    console.log("1")
                    $('#tab1').addClass('tab-has-error');
                } else {
                    console.log("2")
                    $('#tab1').removeClass('tab-has-error');
                }

                if($('#jobseeker-edit-2').find('div.has-error').length !== 0) {
                    console.log("1")
                    $('#tab2').addClass('tab-has-error');
                } else {
                    console.log("2")
                    $('#tab2').removeClass('tab-has-error');
                }

                if($('#jobseeker-edit-3').find('div.has-error').length !== 0) {
                    console.log("1")
                    $('#tab3').addClass('tab-has-error');
                } else {
                    console.log("2")
                    $('#tab3').removeClass('tab-has-error');
                }*/

                $('.validation-errors-message').removeClass('remove');

            },
            submitHandler: function(form) {

                var jobLocationIds = _.pluck($scope.jobseeker.jobseeker_preferred_job_location, 'city_id');
                console.log(jobLocationIds);

                if($scope.experienceList.length > 0) {
                    $scope.jobseeker.jobseeker_is_experienced = 1;
                } else {
                    $scope.jobseeker.jobseeker_is_experienced = 0;
                }

                console.log("yes everything seems right!!");
                $('.validation-errors-message').addClass('remove');
                $('#jobseeker-submit').text("Please Wait...").prop('disabled', true);

                var dob = new Date($scope.jobseeker.jobseeker_dob);
                dob = dob.getTime();

                var data = {
                    jobseeker_name: $scope.jobseeker.jobseeker_firstname.toLowerCase().trim()+ " "+$scope.jobseeker.jobseeker_lastname.toLowerCase().trim(),
                    jobseeker_email: $scope.jobseeker.jobseeker_email.toLowerCase().trim(),
                    jobseeker_password: $scope.jobseeker.jobseeker_password,
                    jobseeker_contact: $scope.jobseeker.jobseeker_contact,
                    jobseeker_dob: dob,
                    jobseeker_gender: Number($scope.jobseeker.jobseeker_gender),
                    jobseeker_interested_in: Number($scope.jobseeker.jobseeker_interested_in),
                    jobseeker_interested_in_name: $scope.jobseeker.jobseeker_interested_in_name,
                    jobseeker_city: $scope.jobseeker.jobseeker_city,
                    jobseeker_permanent_address: $scope.jobseeker.jobseeker_permanent_address,
                    jobseeker_permanent_city: Number($scope.jobseeker.jobseeker_permanent_city),
                    jobseeker_permanent_pincode: $scope.jobseeker.jobseeker_permanent_pincode,
                    jobseeker_current_address: $scope.jobseeker.jobseeker_current_address,
                    jobseeker_current_city: Number($scope.jobseeker.jobseeker_current_city),
                    jobseeker_current_pincode: $scope.jobseeker.jobseeker_current_pincode,
                    jobseeker_marital_status: Number($scope.jobseeker.jobseeker_marital_status),
                    jobseeker_level: Number($scope.jobseeker.jobseeker_level),
                    jobseeker_subject_id: Number($scope.jobseeker.jobseeker_subject_id),
                    jobseeker_level_class_id: $scope.jobseeker.jobseeker_level_class_id,
                    jobseeker_level_class_name: $scope.jobseeker.jobseeker_level_class_name,
                    jobseeker_is_experienced: $scope.jobseeker.jobseeker_is_experienced,
                    jobseeker_current_ctc: $scope.jobseeker.jobseeker_current_ctc,
                    jobseeker_expected_ctc: $scope.jobseeker.jobseeker_expected_ctc,
                    jobseeker_preferred_job_location: JSON.stringify(jobLocationIds),
                    jobseeker_resume: $scope.jobseeker.jobseeker_resume,
                    jobseeker_remarks: $scope.jobseeker.jobseeker_remarks
                };

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



        function toTitleCase(str)
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }


        $scope.goToLogin = function() {
            $('#jobseeker-success-modal').modal('hide');
            window.location.href = '/login';
        }


        $scope.selectTab = function(index) {
            console.log(index);
            switch (index) {
                case 0:
                    $('.jobseeker-edit-container #jobseeker-edit-1').removeClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-2').addClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-3').addClass('remove');
                    $('.jobseeker-edit-container #tab1').addClass('active')
                    $('.jobseeker-edit-container #tab2').removeClass('active')
                    $('.jobseeker-edit-container #tab3').removeClass('active')
                    $('#tab1').removeClass('tab-has-error');
                    break;
                case 1:
                    $('.jobseeker-edit-container #jobseeker-edit-1').addClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-2').removeClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-3').addClass('remove');
                    $('.jobseeker-edit-container #tab1').removeClass('active')
                    $('.jobseeker-edit-container #tab2').addClass('active')
                    $('.jobseeker-edit-container #tab3').removeClass('active')
                    $('#tab2').removeClass('tab-has-error');
                    break;
                case 2:
                    $('.jobseeker-edit-container #jobseeker-edit-1').addClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-2').addClass('remove');
                    $('.jobseeker-edit-container #jobseeker-edit-3').removeClass('remove');
                    $('.jobseeker-edit-container #tab1').removeClass('active')
                    $('.jobseeker-edit-container #tab2').removeClass('active')
                    $('.jobseeker-edit-container #tab3').addClass('active')
                    $('#tab3').removeClass('tab-has-error');
                    break;
                default:

            }
        }

        $scope.levelChanged = function(index) {

            /*---------------------SERVICE TO GET SUBJECTS DATA------------------------*/
            GetSubjectsList.getSubjects(index).success(function(response, status, headers, config) {
                $scope.subjectsList = response.data;
            })

            /*-------------------------------------------------------------------------*/
        }


        $scope.isExperiencedChanged = function(index) {
            if(index == 1) {
                $('.experience-details-container').removeClass('remove')
            } else {
                $('.experience-details-container').addClass('remove')
            }
        }

        $scope.isExperiencedChanged = function(index) {
            $('#add-experience-modal').modal('show');
        }



        $scope.addExperience = function() {

            var data = {
                experience_designation: $scope.experience.experience_designation,
                experience_duration: $scope.experience.experience_duration,
                experience_institution_name: $scope.experience.experience_institution_name,
                experience_is_current: $scope.experience.experience_is_current,
                experience_notice_period: $scope.experience.experience_notice_period
            }

            AddExperience.addExperience(JSON.stringify(data)).success(function(response, status, headers, config) {
                $scope.experienceList = response.data;
            })
        };

        $scope.loadTags = function(query) {
           return $scope.citiesList
        };


        $scope.getCitiesForStateId = function(index) {

            /*---------------------SERVICE TO GET CITIES DATA------------------------*/

            switch (index) {
                case 1:
                    var state_id = $scope.jobseeker.jobseeker_state;
                    GetCities.getCities(state_id).success(function(response) {
                        console.log(response);
                        $scope.citiesList = response.data;
                    });
                    break;
                case 2:
                    var state_id_per = $scope.jobseeker.jobseeker_state_permanent;
                    GetCities.getCities(state_id_per).success(function(response) {
                        $scope.citiesListPermanent = response.data;
                    });
                    break;
                case 3:
                    var state_id_cur = $scope.jobseeker.jobseeker_state_current;
                    GetCities.getCities(state_id_cur).success(function(response) {
                        $scope.citiesListCurrent = response.data;
                    });
                    break;
            }

            /*------------------------------------------------------------------------*/
        }


        $scope.getCitiesArray = function() {
            var citiesArray = [];
            for(var i=0; i<$scope.citiesList.length; i++) {
                citiesArray.push($scope.citiesList);
            }
        };

        $scope.uploadFile = function(){
            var file = $scope.resumeFile;

            console.log('file is ' );
            console.dir(file);

            var uploadUrl = "/fileUpload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };

        $('.upload-btn').on('click', function (){
            $('#upload-resume').click();
            $('.progress-bar').text('0%');
            $('.progress-bar').width('0%');
        });


        $('#upload-resume').on('change', function() {

            var files = $(this).get(0).files;
            $scope.file = [];
            $scope.file.push(files);
            setTimeout(function() {
                if (files.length > 0){
                    console.log("file there now");

                    // create a FormData object which will be sent as the data payload in the
                    // AJAX request

                    /*$http({
                     url: '/uploadResume',
                     method: 'POST',
                     headers: { 'Content-Type': undefined },
                     transformRequest: function(data) {
                     var formData = new FormData();
                     formData.append('model', angular.toJson(data.model));
                     formData.append('j_upload_resume', data.files[0]);
                     console.log(formData);
                     return formData;
                     },
                     data: { model: { title: 'resume'}, files: $scope.file },
                     /!*success: function(data) {
                     console.log('upload successful!\n' + data);
                     },*!/
                     /!*xhr: function() {
                     // create an XMLHttpRequest
                     var xhr = new XMLHttpRequest();

                     // listen to the 'progress' event
                     xhr.upload.addEventListener('progress', function(evt) {

                     if (evt.lengthComputable) {
                     // calculate the percentage of upload completed
                     var percentComplete = evt.loaded / evt.total;
                     percentComplete = parseInt(percentComplete * 100);

                     // update the Bootstrap progress bar with the new percentage
                     $('.progress-bar').text(percentComplete + '%');
                     $('.progress-bar').width(percentComplete + '%');

                     // once the upload reaches 100%, set the progress bar text to done
                     if (percentComplete === 100) {
                     $('.progress-bar').html('Done');
                     }

                     }

                     }, false);

                     return xhr;
                     }*!/
                     }).success(function(data) {
                     console.log('upload successful!\n' + data);
                     })
                     .error(function(err) {
                     console.log(err);
                     })*/

                    console.log("REsume file ", $scope.resumeFile);

                    var file = $scope.resumeFile;
                    var uploadUrl = "/multer";
                    var fd = new FormData();
                    fd.append('file', file);

                    $http.post(uploadUrl,fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                        .success(function(){
                            console.log("success!!");
                        })
                        .error(function(){
                            console.log("error!!");
                        });
                }
            }, 1000)

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
