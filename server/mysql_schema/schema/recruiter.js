/**
 * Created by aman on 20/10/16.
 */
module.exports = function (sequelize, DataTypes) {
    var recruiter = sequelize.define('recruiter', {
        recruiter_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        recruiter_name : {
            type: DataTypes.STRING,
            allowNull : false
        },
        recruiter_email : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : false
        },
        recruiter_contact : {
            type : DataTypes.INTEGER,
            unique : true,
            allowNull : false
        },
        institution_type_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        institution_address : {
            type : DataTypes.STRING,
            allowNull : false
        },
        institution_pincode : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        institution_requirement_ids : DataTypes.STRING,
        institution_subject_req_ids : DataTypes.STRING,
        institution_req_level : DataTypes.STRING
        },
        {
            freezeTableName : true,
            tableName : 'recruiter'
        })
    return recruiter;

}
