/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var Experiences = require('../controllers/experience')
var JobSeeker = require('../controllers/jobseeker');

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


exports.addExperience = function(req, res) {
    var params = JSON.parse(req.body.experience);
    var cookie = JSON.parse(req.cookies.userData)
    var crypt_id = {
        id_crypt: cookie.id_crypt
    }
    JobSeeker.get(crypt_id, function(s,c,m,d) {
        if(s && d.length) {
            console.log("jobseeker found");
            params.experience_jobseeker_id = d[0].jobseeker_id;
            console.log(params.experience_jobseeker_id);
            console.log(JSON.stringify(params));
            Experiences.add(params, function(s1,c1,m1,d1) {
                Experiences.get({}, function(s2, c2, m2, d2) {
                    console.log("RETURNED DATA ",s2,c2,m2,d2);
                    res.send(JSON.stringify({
                        status : s2,
                        code : c2,
                        message : m2,
                        data : d2
                    }))
                })
            })
        } else {
            res.send(JSON.stringify({
                status : false,
                code : 400,
                message : m,
                data : null
            }))
        }
    })
};
