var MySql = require('../mysql_schema/schema');
var _ = require('underscore');

exports.add = function(params, callback) {
    console.log("PARAMS FOR ADD JOBSEEKER "+JSON.stringify(params));

    MySql.jobseeker.create(params).then(function(inserted_data) {
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

