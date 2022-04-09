// Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Import routes
import feedRoutes from "./routes/publicFeed.js";
// Config Setup
const app = express();
dotenv.config();
const PORT = process.env.PORT;
// Routing Setup
app.use("/feed", feedRoutes);
// Cors Middleware for cross-origin
app.use(cors());
// Check server if it's running well
app.get("/", (req, res) => {
  res.send("Ckrilf API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
