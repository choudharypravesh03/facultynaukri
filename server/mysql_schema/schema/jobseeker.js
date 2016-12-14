var city =  require('./city')
var subject = require('./subject')
module.exports = function(sequelize, DataTypes) {
    var jobseeker = sequelize.define('jobseeker', {
        jobseeker_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jobseeker_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        jobseeker_email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        jobseeker_contact : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        jobseeker_dob : {
            type : DataTypes.STRING,
            allowNull : false
        },
        jobseeker_gender : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        jobseeker_password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        jobseeker_permanent_address : DataTypes.STRING,
        jobseeker_current_address : DataTypes.STRING,
        jobseeker_permanent_pincode : DataTypes.STRING,
        jobseeker_current_pincode : DataTypes.STRING,
        jobseeker_permanent_city : DataTypes.INTEGER,
        jobseeker_current_city : DataTypes.INTEGER,
        jobseeker_is_experienced : DataTypes.INTEGER,
        jobseeker_subject_name : DataTypes.STRING,
        jobseeker_subject_id: DataTypes.INTEGER,
        jobseeker_level : DataTypes.INTEGER,
        jobseeker_level_class_id: DataTypes.INTEGER,
        jobseeker_level_class_name: DataTypes.STRING,
        jobseeker_interested_in : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        jobseeker_interested_in_name : {
            type : DataTypes.STRING,
            allowNull : true
        },
        id_crypt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jobseeker_standard_name : DataTypes.STRING,
        jobseeker_current_ctc : DataTypes.STRING,
        jobseeker_expected_ctc : DataTypes.STRING,
        jobseeker_marital_status : DataTypes.INTEGER,
        jobseeker_resume : DataTypes.STRING,
        jobseeker_remarks : DataTypes.TEXT,
        jobseeker_preferred_job_location : {
            type : DataTypes.STRING
        },

        jobseeker_city : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
        {
            freezeTableName : true,
            tableName : 'jobseeker'



    });
    return jobseeker;
}
