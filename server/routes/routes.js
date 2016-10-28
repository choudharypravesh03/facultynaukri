var express = require('express');
var router = express.Router();
var apis = require('../api/tpm_api.js');


router.get('*', function(req, res) {
    console.log("yo");
    res.render('index.ejs');
})


router.post('/addJobSeeker', apis.addJobSeeker);
router.get('/getJobSeeker', apis.getJobSeeker);


module.exports = router;
