import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    image: { type: String, default: "" },
    options: {
      type: [String],
      validate: [(value) => value.length >= 2, "At least two options required"],
    },
    correctAnswer: { type: Number, required: true },
    explanation: { type: String, default: "" },
  },
  { _id: true },
);

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    thumbnail: { type: String, default: "" },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Easy" },
    duration: { type: Number, default: 30 },
    passingMarks: { type: Number, default: 50 },
    price: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    instructions: { type: [String], default: [] },
    questions: [questionSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Quiz", quizSchema);
