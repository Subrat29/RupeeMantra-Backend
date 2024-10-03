import express from 'express'
const router = express.Router();

import { create } from "../controllers/userData.controller.js";

// Create a new user data
router.post("/addUserData", create);

export default router;