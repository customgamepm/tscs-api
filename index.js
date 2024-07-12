const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})

// 2. Define our schema
class Course extends Model {}
class User extends Model {}

Course.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, modelName: 'course' })

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
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    }
}, { sequelize, modelName: 'user' })

// { sequelize } --> { sequelize: sequelize }

// "Sync" our sequelize with our database
sequelize.sync({ alter: true });

// Server Configuration

// PORT: Where the server app will run (default: 3000)

const port = 3000;
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Services
app.get("/", (req, res) => {

    let payload = { message: "Welcome to student portal!" };
    res.json(payload);
})

// Run the server
app.listen(port, () => {
    console.log("hello");
    console.log(`server running at port ${port}`);
});