/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.add = function (params, callback) {
    console.log("PARAMS FOR ADD SUBJECT " + JSON.stringify(params))

    mysql.subject.create(params).then(function(inserted_data) {
        console.log("SUCCESS "+inserted_data);
        callback(true, 200, "SUCCESS", inserted_data);
    }).catch(function(err) {
        console.log(err)
        callback(false, 300, "Error : " + err, {});
    })

}

exports.get = function(params, callback) {
    console.log("PARAMS FOR GET SUBJECTS "+JSON.stringify(params));

    mysql.subject.findAll({
        where :  params,
        attributes : ['subject_id', 'subject_name', 'subject_vacancies', 'subject_type'],
        order: 'subject_id ASC'
    }).then(function(subjects) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(subjects));
        callback(true, 200, "Success", subjects);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}

exports.update =  function (params, update_subject_params, callback) {
    console.log("PARAMS FOR UPDATING VACANCIES" + JSON.stringify(params))

    mysql.subject.update(update_subject_params, {
        where : params
    }).then(function (subject) {
        callback(true, 200, 'Success', subject);
    }).catch(function (err) {
        callback(false, 300, 'Error : ' + err, {})
    })

}
