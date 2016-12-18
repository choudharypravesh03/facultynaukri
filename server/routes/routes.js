var express = require('express');
var router = express.Router();
var apisJobSeeker = require('../api/jobseeker');
var apisCity = require('../api/city');
var apisState = require('../api/state');
var apisExperience = require('../api/experience');
var apisRecruiter = require('../api/recruiter');
var apisRecruiterRequirements = require('../api/recruiter_requirements');
var apisSubject = require('../api/subject');
var session  = require('express-session');



router.post('/addJobSeeker', apisJobSeeker.addJobSeeker);
router.post('/updateExperience', apisJobSeeker.updateJobSeeker);
router.post('/addRecruiter', apisRecruiter.addRecruiter);
router.get('/getJobSeeker', apisJobSeeker.getJobSeeker);
router.post('/updateJobSeeker', apisJobSeeker.updateJobSeeker);
router.post('/addSubject', apisSubject.addSubject);
router.get('/getSubjects', apisSubject.getSubjects);
router.post('/updateSubjectVacancies', apisSubject.updateSubjectVacancies);
router.post('/addRecuiter', apisRecruiter.addRecruiter);
router.get('/getCity' , apisCity.getCity);
router.post('/uploadResume', apisJobSeeker.addResume);
router.get('/getStates', apisState.getStates);
router.get('/getExperiences', apisExperience.getExperiences);
router.post('/addExperience', apisExperience.addExperience);
router.get('/getRecruiterRequirements', apisRecruiterRequirements.getRecruiterRequirements);
router.get('/u/login', apisJobSeeker.jobseekerLogin);

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+"/gulp/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+ '-' + Date.now()+'.jpg')
    }
});
var upload = multer({ storage: storage });

router.post('/multer', upload.single('file'));

router.get('*', function(req, res) {
    res.contentType('text/html')
    res.render('index.ejs');
})

module.exports = router;
