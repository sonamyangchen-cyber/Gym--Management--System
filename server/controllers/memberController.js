
const mongoose = require("mongoose");
const Member = require("../models/Member");

// GET: Retrieve all members
const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      message: "Members retrieved successfully",
      data: members
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving members",
      error: error.message
    });
  }
};

// GET: Retrieve one member by ID
const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid member ID"
      });
    }

    const member = await Member.findById(id);

    if (!member) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json({
      message: "Member retrieved successfully",
      data: member
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving member",
      error: error.message
    });
  }
};

// POST: Create a new member
const createMember = async (req, res) => {
  try {
    const newMember = await Member.create(req.body);

    res.status(201).json({
      message: "Member created successfully",
      data: newMember
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    res.status(400).json({
      message: "Error creating member",
      error: error.message
    });
  }
};

// PUT: Update an existing member
const updateMember = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid member ID"
      });
    }

    const updatedMember = await Member.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedMember) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json({
      message: "Member updated successfully",
      data: updatedMember
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating member",
      error: error.message
    });
  }
};

// DELETE: Remove a member
const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid member ID"
      });
    }

    const deletedMember = await Member.findByIdAndDelete(id);

    if (!deletedMember) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json({
      message: "Member deleted successfully",
      data: deletedMember
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting member",
      error: error.message
    });
  }
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
