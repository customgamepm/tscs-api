const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

router.get("/schedules", async (req, res) => {
    let schedules = await Schedule.findAll();

    res.json(schedules);
});

router.get("/schedules/:id", async (req, res) => {
    let schedule = await Schedule.findByPk(req.params.id);

    if (schedule) {
        res.json(schedule);
    } else {
        res.status(404).json({ message: "not found" });
    }
});

router.post("/schedules", async (req, res) => {
    let schedule = await Schedule.create(req.body);

    res.json(schedule);
});

router.put("/schedules/:id", async (req, res) => {
    let schedule = await Schedule.findByPk(req.params.id);

    if (schedule) {
        await schedule.update(req.body);

        res.json(schedule);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.delete("/schedules/:id", async (req, res) => {
    let schedule = await Schedule.findByPk(req.params.id);

    if (schedule) {
        await schedule.destroy();

        res.json({ message: "ok" });
    } else {
        res.status(404).json({ message: "not found" });
    }
})

module.exports = router;
