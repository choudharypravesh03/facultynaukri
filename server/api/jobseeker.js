var _ = require('underscore')
var JobSeeker = require('../controllers/jobseeker')
var Experiences = require('../controllers/experience')
var rand = require('csprng');


exports.addJobSeeker = function(req, res) {
    console.log('FILES****************', req.files);
    var params = JSON.parse(req.body.jobseeker);
    params.id_crypt = rand(160, 36);
    console.log("addJobSeeker params "+JSON.stringify(params));
    console.log(params.jobseeker_email)
    JobSeeker.add(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
};

var getJobSeeker = exports.getJobSeeker = function(req, res) {
    var cookie = JSON.parse(req.cookies.userData)
    console.log("COOKIE "+JSON.stringify(cookie));
    var crypt_id = {
        id_crypt: cookie.id_crypt
    }
    JobSeeker.get(crypt_id, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
};



exports.jobseekerLogin = function(req, res) {
    var params = JSON.parse(req.query.jobseeker_login);
    console.log(JSON.stringify(params.jobseeker_email))
    JobSeeker.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        if(s & d.length) {
            if(params.jobseeker_email == d[0].jobseeker_email && params.jobseeker_password == d[0].jobseeker_password) {

                var response = {
                    id_crypt: d[0].id_crypt,
                    email: d[0].jobseeker_email
                }

                res.send(JSON.stringify({
                    status : s,
                    code : c,
                    message : m,
                    data : response
                }))
            } else {
                res.send(JSON.stringify({
                    status : false,
                    code : 400,
                    message : "Does not match",
                    data : null
                }))
            }
        } else {
            res.send(JSON.stringify({
                status : false,
                code : 400,
                message : m,
                data : null
            }))
        }
    })
}

exports.updateJobSeeker = function (req, res) {

    var cookie = JSON.parse(req.cookies.userData)

    console.log("CRYPT_ID"+cookie.id_crypt)
    var data = req.body.jobseeker;
    var params = {
        crypt_id: cookie.id_crypt
    }



    console.log(params);
    console.log(params.crypt_id);

    JobSeeker.update(params, data, function(s,c,m,d){
        if(s) {
            res.send(JSON.stringify({
                status : s,
                code :c,
                message : m,
                data : d
            }))
        }
        else {
            res.send(JSON.stringify({
                status: s,
                code: c,
                message: m,
                data: d
            }))
        }
    })

}


exports.addResume = function(req, res) {
    console.log("COMING INTO ADD RESUME");
    console.log(JSON.stringify(JSON.stringify(req.files)));
}
