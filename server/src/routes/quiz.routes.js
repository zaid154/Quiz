import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getAdminQuizzes,
  getPublishedQuizzes,
  getQuizById,
  quizRules,
  updateQuiz,
} from "../controllers/quiz.controller.js";
import { requireAdmin, protect } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { getAdminStats } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/", getPublishedQuizzes);
router.get("/admin", protect, requireAdmin, getAdminQuizzes);
router.get("/admin/stats", protect, requireAdmin, getAdminStats);
router.get("/:id", protect, getQuizById);
router.post("/", protect, requireAdmin, quizRules, validate, createQuiz);
router.put("/:id", protect, requireAdmin, quizRules, validate, updateQuiz);
router.delete("/:id", protect, requireAdmin, deleteQuiz);

export default router;
