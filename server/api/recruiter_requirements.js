/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var RecruiterRequirements = require('../controllers/recruiter_requirements')

exports.getRecruiterRequirements = function(req, res) {
    var params = req.query;
    RecruiterRequirements.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}
