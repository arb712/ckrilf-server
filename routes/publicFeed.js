import express from "express";

import { getFeed, searchFeed } from "../controllers/publicFeed.js";

const router = express.Router();

router.get("/getFeed", getFeed);
router.get("/search", searchFeed);

export default router;
