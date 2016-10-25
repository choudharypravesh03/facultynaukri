var express = require('express');
var router = express.Router();
var apisJobSeeker = require('../api/jobseeker');
var apisCity = require('../api/city');
var apisState = require('../api/state');
var apisExperience = require('../api/experience');
var apisRecruiter = require('../api/recruiter');
var apisRecruiterRequirements = require('../api/recruiter_requirements');
var apisSubject = require('../api/subject');


router.get('/', function(req, res) {
    console.log("coming into /");
    res.render('index.ejs');
})


router.post('/addJobSeeker', apisJobSeeker.addJobSeeker);
router.get('/getJobSeeker', apisCity.getCity);
router.post('/updateJobSeeker', apisJobSeeker.updateJobSeeker);

router.post('/addSubject', apisSubject.addSubject);
router.get('/getSubjects', apisSubject.getSubjects);
router.post('/updateSubjectVacancy', apisSubject.updateSubjectVacancies())

router.post('/addRecuiter', apisRecruiter.addRecruiter);

router.get('/getCity' , apisCity.getCity);

router.get('/getStates', apisState.getStates);

router.get('/getExperiences', apisExperience.getExperiences);

router.get('/getRecruiterRequirements', apisRecruiterRequirements.getRecruiterRequirements);




module.exports = router;
