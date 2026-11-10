
const express = require("express");
const router = express.Router();

const {
  createTrainer,
  getTrainers,
  getTrainerById,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/trainerController");

// Create trainer
router.post("/", createTrainer);

// Get all trainers
router.get("/", getTrainers);

// Get trainer by ID
router.get("/:id", getTrainerById);

// Update trainer
router.put("/:id", updateTrainer);

// Delete trainer
router.delete("/:id", deleteTrainer);

module.exports = router;
