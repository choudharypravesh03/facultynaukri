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
                allowNull: false,
                unique: true
            },
            city_state_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'state',
                    key: 'state_id'
                }
            }
        },
        {
            freezeTableName : true,
            tableName : 'city'
        })


    return  city;

}
