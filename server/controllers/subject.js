/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.add = function (params, callback) {

    mysql.subject.create(params).then(function(inserted_data) {
        callback(true, 200, "SUCCESS", inserted_data);
    }).catch(function(err) {
        console.log(err)
        callback(false, 300, "Error : " + err, {});
    })

}

exports.get = function(params, callback) {

    mysql.subject.findAll({
        where :  params,
        attributes : ['subject_id', 'subject_name', 'subject_vacancies', 'subject_type'],
        order: 'subject_id ASC'
    }).then(function(subjects) {
        callback(true, 200, "Success", subjects);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}

exports.update =  function (params, update_subject_params, callback) {

    mysql.subject.update(update_subject_params, {
        where : params
    }).then(function (subject) {
        callback(true, 200, 'Success', subject);
    }).catch(function (err) {
        callback(false, 300, 'Error : ' + err, {})
    })

}
