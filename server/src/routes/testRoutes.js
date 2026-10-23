
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Gym Management System API is running",
        status: "success"
    });
});

module.exports = router;
