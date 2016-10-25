var _ = require('underscore')
var Recruiter = require('../controllers/recruiter')

exports.addRecruiter = function(req, res) {
    var params = JSON.parse(req.body.details);
    console.log("add Recruiter params "+JSON.stringify(params));
    Recruiter.add(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}
