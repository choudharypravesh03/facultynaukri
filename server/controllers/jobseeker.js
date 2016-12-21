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
        where : params
    }).then(function(jobseekers) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(jobseekers));
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}


exports.update =  function(params, update_params, callback) {
    console.log("PARAMS**********"+params);
    console.log(params.crypt_id);
    console.log("UPDATE PARAMS*******"+update_params);
    console.log(update_params.jobseeker_name);
    mysql.jobseeker.update(update_params, {
        where : {
            id_crypt: params.crypt_id
        }
    }).then(function(data){
        callback(true, 200, "Success", data);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    })

}

