const express = require('express');
const router = express.Router();
const AccountType = require('../models/AccountType');

router.get("/accounttypes", async (req, res) => {
    let accountTypes = await AccountType.findAll();

    res.json(accountTypes);
});

router.get("/accounttypes/:id", async (req, res) => {
    let accountType = await AccountType.findByPk(req.params.id);

    if (accountType) {
        res.json(accountType);
    } else {
        res.status(404).json({ message: "not found" });
    }
});

router.post("/accounttypes", async (req, res) => {
    let accountType = await AccountType.create(req.body);

    res.json(accountType);
});

router.put("/accounttypes/:id", async (req, res) => {
    let accountType = await AccountType.findByPk(req.params.id);

    if (accountType) {
        await accountType.update(req.body);

        res.json(accountType);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.delete("/accounttypes/:id", async (req, res) => {
    let accountType = await AccountType.findByPk(req.params.id);

    if (accountType) {
        await accountType.destroy();

        res.json({ message: "ok" });
    } else {
        res.status(404).json({ message: "not found" });
    }
});

// (async () => {
//     await Role.create({
//         name: "Admin",
//         type: 0
//     });
// })();

// (async () => {
//     await Role.create({
//         name: "Teacher",
//         type: 1
//     });
// })();

// (async () => {
//     await Role.create({
//         name: "Student",
//         type: 2
//     });
// })();

module.exports = router;
