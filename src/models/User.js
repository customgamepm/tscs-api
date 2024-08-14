const sequelize = require('../../config/database');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    // role: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     unique: false
    // },
    // 0 - admin
    // 1 - teacher
    // 2 - student
    // type: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: false
    // },
    account_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'AccountTypes',
            key: 'id'
        }
    }
    // type: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: false
    // }
    // foreign_keys to Class
    // classes: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     unique: false
    // }
}, { sequelize, modelName: 'user' });

module.exports = User;
