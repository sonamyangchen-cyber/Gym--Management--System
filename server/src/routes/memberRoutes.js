
const express = require("express");
const router = express.Router();

const {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
} = require("../controllers/memberController");

// GET all members
router.get("/", getMembers);

// GET one member by ID
router.get("/:id", getMemberById);

// POST a new member
router.post("/", createMember);

// PUT: update a member
router.put("/:id", updateMember);

// DELETE a member
router.delete("/:id", deleteMember);

module.exports = router;
