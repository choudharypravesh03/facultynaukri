/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var Experiences = require('../controllers/experience')

exports.getExperiences = function(req, res) {
    var params = req.query;
    Experiences.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}
