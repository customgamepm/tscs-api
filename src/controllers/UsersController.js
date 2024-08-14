const express = require('express');
const router = express.Router();
const User = require('../models/User');
const AccountType = require('../models/AccountType');
const authenticateUser = require('../middleware/AuthenticateUser');

// middleware to authenticate user
router.use(authenticateUser);

router.get("/users", async (req, res) => {
    let users = await User.findAll({ include: [{ model: AccountType, as: 'accountType' }] });
    
    res.json(users);
});

router.get("/users/:id", async (req, res) => {
    let user = await User.findByPk(req.params.id, { include: [{ model: AccountType, as: 'accountType' }] });

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "not found" });
    }
});

router.post("/users", async (req, res) => {
    let user = await User.create(req.body);

    res.json(user);
});

router.put("/users/:id", async (req, res) => {
    let user = await User.findByPk(req.params.id);

    if (user) {
        await user.update(req.body);

        res.json(user);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.delete("/users/:id", async (req, res) => {
    let user = await User.findByPk(req.params.id);

    if (user) {
        await user.destroy();

        res.json({ message: "ok" });
    } else {
        res.status(404).json({ message: "not found" });
    }
})

module.exports = router;
