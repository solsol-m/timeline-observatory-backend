import express from "express";
import { getEras } from "../controllers/eraController.js";

const router = express.Router();

router.get("/", getEras);

export default router;
