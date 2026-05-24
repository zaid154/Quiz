import crypto from "crypto";
import Razorpay from "razorpay";
import Payment from "../models/Payment.js";
import Quiz from "../models/Quiz.js";

function getRazorpayClient() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys are missing in .env");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

export async function createPaymentOrder(req, res, next) {
  try {
    const quiz = await Quiz.findById(req.body.quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    if (quiz.price <= 0) {
      return res.status(400).json({ message: "This quiz is free" });
    }

    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount: quiz.price * 100,
      currency: "INR",
      receipt: `quiz_${quiz._id}_${Date.now()}`,
    });

    await Payment.create({
      user: req.user._id,
      quiz: quiz._id,
      amount: quiz.price,
      razorpayOrderId: order.id,
      status: "created",
    });

    res.status(201).json({
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    next(error);
  }
}

export async function verifyPayment(req, res, next) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    const payment = await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "paid",
      },
      { new: true },
    );

    res.json({ payment, message: "Payment verified" });
  } catch (error) {
    next(error);
  }
}
