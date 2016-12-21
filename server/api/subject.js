/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore')
var Subject = require('../controllers/subject')

    exports.addSubject = function(req, res) {
    var params = JSON.parse(req.body.subject);
    Subject.add(params, function(s,c,m,d) {
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.getSubjects = function(req, res) {
    var params = req.query.subject_type;
    var input = {
        subject_type: params
    }
    Subject.get(input, function(s,c,m,d) {
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))
    })
}

exports.updateSubjectVacancies = function(req, res) {
    var subject = JSON.parse(req.body.subject)

    var subject_id =  subject.subject_id;
    var subject_vacancies = subject.subject_vacancies;
    var params = {
        subject_id : subject_id
    }

    var update_subject_params = {
        subject_vacancies : subject_vacancies
    }

    Subject.update(params, update_subject_params, function (s,c,m,d) {
        res.send(JSON.stringify({
            status : s,
            code : c,
            message : m,
            data : d
        }))

    })
}
