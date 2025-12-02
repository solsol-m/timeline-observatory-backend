require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/api/events", require("./routes/eventRoutes"));

// Test
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
