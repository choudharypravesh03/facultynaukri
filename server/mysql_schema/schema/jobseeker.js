module.exports = function(sequelize, datatypes) {
    var jobseeker = sequelize.define('jobseeker', {
        jobseeker_id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jobseeker_name: datatypes.STRING,
        jobseeker_email: datatypes.STRING,
        contact_no: datatypes.STRING,
        city: datatypes.STRING,
        address: datatypes.STRING
    }, {
        indexes: [

        ]
    });
    return jobseeker;
};
