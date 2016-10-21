var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)

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

    MySql.jobseeker.findAll({
        where: params,
        order: '"updatedAt" DESC'
    }).then(function(jobseekers) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(jobseekers));
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}


exports.update =  function(params, callback){
    console.logs("PARAMS FOR UPDATE JOBSEEKER " + JSON.stringify());

}

