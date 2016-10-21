module.exports = function (sequelize, DataTypes) {
    var recruiter_req = sequelize.define('recruiter_requirement',{
        req_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : DataTypes.STRING,
            unique : true
        }
    },
        {
            freezeTableName : true,
            tableName : 'recruiter_requirement'
        })
    return recruiter_req;
}
