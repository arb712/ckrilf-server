// Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Import routes
import feedRoutes from "./routes/publicFeed.js";

const app = express();
const PORT = 5000;
dotenv.config();

// Routing Setup
app.use("/feed", feedRoutes);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Ckrilf API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
