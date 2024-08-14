const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class Schedule extends Model {}

Schedule.init({
    start: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'schedule' })

module.exports = Schedule;