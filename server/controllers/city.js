/**
 * Created by aman on 21/10/16.
 */
var _ = require('underscore');
var INSTALLATION_DB = require('../config/faculty_naukri_db');
var mysql = require(INSTALLATION_DB.MYSQL_SCHEMA_MAIN)
var sequelize = require('sequelize')

exports.get = function(params, callback) {
    console.log("PARAMS FOR GET CITY "+JSON.stringify(params));

    mysql.city.findAll({
        where : params,
        attributes : ['city_id', 'city_name'],
        order: 'city_state_name ASC'
    }).then(function(city) {
        console.log("SUCCESS RESPONSE "+JSON.stringify(city));
        callback(true, 200, "Success", city);
    }).catch(function(err) {
        callback(false, 300, "Error : " + err, {});
    });

}
