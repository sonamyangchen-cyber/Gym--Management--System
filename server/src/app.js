
const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/testRoutes");
const memberRoutes = require("../routes/memberRoutes");
const trainerRoutes = require("../routes/trainerRoutes");
const authRoutes = require("../routes/authRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Existing test route
app.use("/", testRoutes);

// Gym member API routes
app.use("/api/members", memberRoutes);
// Gym trainer API routes
app.use("/api/trainers", trainerRoutes);
// Authentication API routes
app.use("/api/auth", authRoutes);

module.exports = app;
