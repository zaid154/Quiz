import Attempt from "../models/Attempt.js";
import Payment from "../models/Payment.js";
import Quiz from "../models/Quiz.js";
import User from "../models/User.js";

export async function getAdminStats(_req, res, next) {
  try {
    const [totalUsers, totalQuizzes, totalAttempts, paidPayments] = await Promise.all([
      User.countDocuments({ role: "user" }),
      Quiz.countDocuments(),
      Attempt.countDocuments(),
      Payment.find({ status: "paid" }),
    ]);

    const revenue = paidPayments.reduce((total, payment) => total + payment.amount, 0);

    res.json({
      stats: {
        totalUsers,
        totalQuizzes,
        totalAttempts,
        revenue,
      },
    });
  } catch (error) {
    next(error);
  }
}
