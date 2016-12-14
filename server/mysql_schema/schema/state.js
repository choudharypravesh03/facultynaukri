/**
 * Created by aman on 20/10/16.
 */
module.exports = function (sequelize, DataTypes) {
    var state = sequelize.define('state', {
        state_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        state_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        state_type : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },
        {
            freezeTableName : true,
            tableName : 'state'
        })
    return state;
}
