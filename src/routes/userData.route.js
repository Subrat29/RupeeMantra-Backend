import express from 'express'
const router = express.Router();

import { create } from "../controllers/userData.controller.js";

router.post("/userData", create);

export default router;