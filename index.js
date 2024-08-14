const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Model, DataTypes } = require('sequelize');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = require('./config/database');
// import { sequelize } from './config/database';

// 2. Define our schema
const AccountType = require('./src/models/AccountType');
const User = require('./src/models/User');
// class Course extends Model {}
// class User extends Model {}

// 3. Define associations
AccountType.hasMany(User, { foreignKey: 'account_type_id' });
User.belongsTo(AccountType, {as: 'accountType', foreignKey: 'account_type_id' });

// Course.init({
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     }
// }, { sequelize, modelName: 'course' });

// const User = require('./src/models/User');
// const Auth = require('./src/models/Auth');

// { sequelize } --> { sequelize: sequelize }

// "Sync" our sequelize with our database
sequelize.sync({ alter: true });

// Server Configuration

// PORT: Where the server app will run (default: 3000)

const port = 3000;
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const AuthController = require('./src/controllers/AuthController');
const UsersController = require('./src/controllers/UsersController');
const SchedulesController = require('./src/controllers/SchedulesController');
const AccountTypesController = require('./src/controllers/AccountTypesController');
app.use(AuthController);
app.use(UsersController);
app.use(SchedulesController);
app.use(AccountTypesController);

// Services
// app.get("/", (req, res) => {

//     let payload = { message: "Welcome to student portal!" };
//     res.json(payload);
// })

// Run the server
app.listen(port, () => {
    console.log("hello");
    console.log(`server running at port ${port}`);
});
