/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.get = function(params, callback) {
    console.log("PARAMS FOR GET RECRUITER_REQUIREMENTS "+JSON.stringify(params));

    mysql.recruiter_requirement.findAll({
        attributes : ['req_id', 'name'],
        order: 'req_id ASC'
    }).then(function(jobseekers) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(jobseekers));
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}
