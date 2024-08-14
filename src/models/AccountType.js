const sequelize = require('../../config/database');
const { Model, DataTypes } = require('sequelize');

class AccountType extends Model {}

AccountType.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    scope: {
        type: DataTypes.JSON,
        allowNull: false,
        unique: false
    }
}, { sequelize, modelName: 'accountType' });

module.exports = AccountType;
