var express = require('express');
var router = express.Router();
var apis = require('../api/jobseeker.js');


router.get('/', function(req, res) {
    console.log("coming into /");
    res.render('index.ejs');
})


router.post('/addJobSeeker', apis.addJobSeeker);
router.get('/getJobSeeker', apis.getJobSeeker);
router.post('/updateJobSeeker', apis.updateJobSeeker);


module.exports = router;
