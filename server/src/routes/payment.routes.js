import express from "express";
import { createPaymentOrder, verifyPayment } from "../controllers/payment.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/orders", protect, createPaymentOrder);
router.post("/verify", protect, verifyPayment);

export default router;
