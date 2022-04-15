// Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Import routes
import feedRoutes from "./routes/publicFeed.js";
// Config Setup
const app = express();
dotenv.config();
// Cors Middleware for cross-origin
app.use(cors());
const PORT = process.env.PORT || 5000;
// Routing Setup
app.use("/feed", feedRoutes);
// Check server if it's running well
app.get("/", (req, res) => {
  res.send("Ckrilf API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
