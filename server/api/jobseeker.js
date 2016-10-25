var _ = require('underscore')
var JobSeeker = require('../controllers/jobseeker')
var Experiences = require('../controllers/experience')


exports.addJobSeeker = function(req, res) {
    var params = JSON.parse(req.body.details);
    console.log("addJobSeeker params "+JSON.stringify(params));
    JobSeeker.add(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.getJobSeeker = function(req, res) {
    var params = req.query;
    JobSeeker.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.updateJobSeeker(function (req, res) {
    var jobseeker_email =  req.body.jobseeker_email;

    var params = {
        jobseeker_email : jobseeker_email
    }
    var experiences = req.body.experiences;
    var update_params = req.body.details;
    JobSeeker.update(params, update_params, experiences, function(s,c,m,d){
        console.log(params.toString())
        if(s) {
            Experiences.add(experiences, function (s1,c1,m1,d1) {
                console.log(experiences.toString())
                res.send(JSON.stringify({
                    status : s1,
                    code :c1,
                    message : m1,
                    data : d1
                }))
            })
        }
        else{
            res.send(JSON.stringify({
                status: s,
                code: c,
                message: m,
                data: d
            }))
        }
    })

})
