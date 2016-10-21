/**
 * Created by aman on 20/10/16.
 */
var jobseeker =  require('./jobseeker')
module.exports = function (sequelize, DataTypes) {
    var experience = sequelize.define('experience', {
            experience_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            experience_institution_name: {
                type: DataTypes.STRING,
                unique : true,
                allowNull : false
            },
            experience_designation: {
                type :  DataTypes.STRING,
                allowNull : false
            },
            experience_duration : {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            experience_is_current : {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            experience_notice_period : {
                type : DataTypes.INTEGER,
                allowNull : true
            },
            experience_jobseeker_id : {
                type : DataTypes.INTEGER,
                allowNull : false
            }
        },
{
    freezeTableName : true,
    tableName : 'eperience'
})
    return experience;

}
