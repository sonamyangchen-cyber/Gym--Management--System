const express = require("express");
const testRoutes = require("./routes/testRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Gym Management System Backend is running!",
  });
});

app.use("/api/test", testRoutes);

module.exports = app;