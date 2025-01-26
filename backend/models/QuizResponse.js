
const mongoose = require("mongoose");

const quizResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  responses: { type: Array, required: true },
  personalityType: { type: String, required: true },
});

module.exports = mongoose.model("QuizResponse", quizResponseSchema);
