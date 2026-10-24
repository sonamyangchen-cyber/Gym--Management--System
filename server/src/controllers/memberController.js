
let members = [
    {
        id: "1",
        name: "Test Member",
        membershipPlan: "Monthly"
    }
];

// GET all members
const getMembers = (req, res) => {
    res.status(200).json({
        message: "Members retrieved successfully",
        data: members
    });
};

// GET one member by ID
const getMemberById = (req, res) => {
    const member = members.find(
        (item) => item.id === req.params.id
    );

    if (!member) {
        return res.status(404).json({
            message: "Member not found"
        });
    }

    res.status(200).json({
        message: "Member retrieved successfully",
        data: member
    });
};

// POST: create a member
const createMember = (req, res) => {
    const { name, membershipPlan } = req.body;

    if (!name || !membershipPlan) {
        return res.status(400).json({
            message: "Name and membershipPlan are required"
        });
    }

    const newMember = {
        id: String(Date.now()),
        name,
        membershipPlan
    };

    members.push(newMember);

    res.status(201).json({
        message: "Member created successfully",
        data: newMember
    });
};

// PUT: update a member
const updateMember = (req, res) => {
    const member = members.find(
        (item) => item.id === req.params.id
    );

    if (!member) {
        return res.status(404).json({
            message: "Member not found"
        });
    }

    const { name, membershipPlan } = req.body;

    if (name !== undefined) member.name = name;
    if (membershipPlan !== undefined) {
        member.membershipPlan = membershipPlan;
    }

    res.status(200).json({
        message: "Member updated successfully",
        data: member
    });
};

// DELETE: remove a member
const deleteMember = (req, res) => {
    const index = members.findIndex(
        (item) => item.id === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Member not found"
        });
    }

    const deletedMember = members.splice(index, 1)[0];

    res.status(200).json({
        message: "Member deleted successfully",
        data: deletedMember
    });
};

module.exports = {
    getMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
};
