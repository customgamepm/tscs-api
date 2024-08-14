const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const isValidLogin = async (inputPassword, password) => {
    console.log(`isValidLogin(inputPassword: ${inputPassword}, password: ${password})`);
    return await bcrypt.compare(inputPassword, password);
}

const generateToken = (user) => {
    return jwt.sign(user, 'secret');
}

module.exports = {
    hashPassword,
    isValidLogin,
    generateToken
}