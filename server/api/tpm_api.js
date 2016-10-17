var _ = require('underscore')
var JobSeeker = require('../controllers/jobseeker.js')


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
