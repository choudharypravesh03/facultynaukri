/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var Subject = require('../controllers/subject')

    exports.addSubject = function(req, res) {
    var params = JSON.parse(req.body.details);
    console.log("add Subject params "+JSON.stringify(params));
    Subject.add(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.getSubjects = function(req, res) {
    var params = req.query;
    Subject.get(params, function(s,c,m,d) {
        console.log("RETURNED DATA ",s,c,m,d);
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.updateSubjectVacancies = function(req, res) {
    var subject_id =  req.body.subject_id;
    var subject_name = req.body.subject_name;
    var subject_type = req.body.subject_type;
    var subject_vacancies = req.body.subject_vacancies;

    var params = {
        subject_name : subject_name,
        subject_type : subject_type
    }

    var update_subject_params = {
        subject_vacancies : subject_vacancies
    }

    Subject.update(params, update_subject_params, function (s,c,m,d) {
        console.log(params, update_subject_params, s , c, m , d)
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))

    })
}
