/**
 * Created by aman on 20/10/16.
 */
module.exports = function (sequelize, DataTypes) {
    var subject = sequelize.define('subject',{
        subject_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        subject_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        subject_type : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        subject_vacancies : DataTypes.INTEGER
        },
        {
            freezeTableName : true,
            tableName : 'subject'
        })
    return subject;

}
