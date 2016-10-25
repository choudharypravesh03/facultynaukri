/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.get = function(params, callback) {
    console.log("PARAMS FOR GET STATES "+JSON.stringify(params));

    mysql.state.findAll({
        attributes : ['state_id', 'state_name'],
        order: 'state_id ASC'
    }).then(function(jobseekers) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(jobseekers));
        callback(true, 200, "Success", jobseekers);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}
