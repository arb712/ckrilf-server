import express from "express";

import { getFeed, searchFeed } from "../controllers/publicFeed.js";

const router = express.Router();

router.get("/getFeed", getFeed);

export default router;
