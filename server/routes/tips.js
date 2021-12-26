import express from "express";
import {
  getReactTips,
  createReactTip,
  updateReactTip,
  deleteReactTip,
} from "../controllers/tips.js";
const router = express.Router();

router.get("/react", getReactTips);
router.post("/react", createReactTip);
router.patch("/react/:id", updateReactTip);
router.delete("/react/:id", deleteReactTip);
export default router;
