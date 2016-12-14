/**
 * Created by aman on 20/10/16.
 */
var state = require('./state')
module.exports = function (sequelize, DataTypes) {
    var city = sequelize.define('city', {
            city_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            city_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state_id: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            freezeTableName : true,
            tableName : 'city'
        })


    return  city;

}
