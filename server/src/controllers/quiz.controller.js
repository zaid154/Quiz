import { body } from "express-validator";
import Quiz from "../models/Quiz.js";

export const quizRules = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("difficulty").optional().isIn(["Easy", "Medium", "Hard"]),
  body("duration").optional().isNumeric(),
  body("price").optional().isNumeric(),
  body("questions").optional().isArray(),
];

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function getPublishedQuizzes(req, res, next) {
  try {
    const quizzes = await Quiz.find({ isPublished: true })
      .select("-questions.correctAnswer")
      .sort({ createdAt: -1 });
    res.json({ quizzes });
  } catch (error) {
    next(error);
  }
}

export async function getAdminQuizzes(_req, res, next) {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });
    res.json({ quizzes });
  } catch (error) {
    next(error);
  }
}

export async function getQuizById(req, res, next) {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ quiz });
  } catch (error) {
    next(error);
  }
}

export async function createQuiz(req, res, next) {
  try {
    const quiz = await Quiz.create({
      ...req.body,
      slug: req.body.slug || `${slugify(req.body.title)}-${Date.now()}`,
      createdBy: req.user._id,
    });

    res.status(201).json({ quiz });
  } catch (error) {
    next(error);
  }
}

export async function updateQuiz(req, res, next) {
  try {
    const updates = { ...req.body };

    if (updates.title && !updates.slug) {
      updates.slug = `${slugify(updates.title)}-${Date.now()}`;
    }

    const quiz = await Quiz.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ quiz });
  } catch (error) {
    next(error);
  }
}

export async function deleteQuiz(req, res, next) {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ message: "Quiz deleted" });
  } catch (error) {
    next(error);
  }
}
