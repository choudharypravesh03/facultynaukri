/**
 * Created by aman on 21/10/16.
 */

var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.add = function (params, callback) {
    console.log("PARAMS FOR ADD EXPERIENCE " + JSON.stringify(params))

    mysql.experience.bulkCreate(params).then(function(inserted_data) {
        console.log("SUCCESS "+inserted_data);
        callback(true, 200, "SUCCESS", inserted_data);
    }).catch(function(err) {
        console.log(err)
        callback(false, 300, "Error : " + err, {});
    })

}

exports.get = function(params, callback) {
    console.log("PARAMS FOR GET EXPERIENCES "+JSON.stringify(params));

    mysql.experience.findAll({
        where : params,
        order: 'experience_id ASC'
    }).then(function(subjects) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(subjects));
        callback(true, 200, "Success", subjects);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}
