var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')


exports.add = function(params, callback) {
    console.log("PARAMS FOR ADD JOBSEEKER "+JSON.stringify(params));

    mysql.jobseeker.create(params).then(function(inserted_data) {
        console.log("SUCCESS "+inserted_data);
        callback(true, 200, "SUCCESS", inserted_data);
    }).catch(function(err) {
        console.log(err)
        callback(false, 300, "Error : " + err, {});
    })

}


exports.get = function(params, callback) {
    console.log("PARAMS FOR GET JOBSEEKER "+JSON.stringify(params));

    mysql.jobseeker.findAll({
        order: '"updatedAt" DESC'
    }).then(function(jobseekers) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(jobseekers));
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}


exports.update =  function(params, update_params, callback){
    console.logs("PARAMS FOR UPDATE JOBSEEKER " + JSON.stringify());
    mysql.jobseeker.update(update_params, {
        where : params
    }).then(function(data){
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    })

}

