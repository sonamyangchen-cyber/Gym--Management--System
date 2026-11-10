
const Trainer = require("../models/Trainer");

// Create a trainer
exports.createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);

    res.status(201).json({
      message: "Trainer created successfully",
      data: trainer,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get all trainers
exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();

    res.status(200).json({
      message: "Trainers retrieved successfully",
      data: trainers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get one trainer
exports.getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        message: "Trainer not found",
      });
    }

    res.status(200).json({
      message: "Trainer retrieved successfully",
      data: trainer,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update a trainer
exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!trainer) {
      return res.status(404).json({
        message: "Trainer not found",
      });
    }

    res.status(200).json({
      message: "Trainer updated successfully",
      data: trainer,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete a trainer
exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        message: "Trainer not found",
      });
    }

    res.status(200).json({
      message: "Trainer deleted successfully",
      data: trainer,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
