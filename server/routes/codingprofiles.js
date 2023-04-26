import express from "express";
import {
  getCodingProfile,
 
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getCodingProfile);

export default router;
