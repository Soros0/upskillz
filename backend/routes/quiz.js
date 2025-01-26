const express = require("express");
const router = express.Router();
const QuizResponse = require("../models/QuizResponse");

router.post("/submit", async (req, res) => {
  const { userId, responses } = req.body;
  const personalityType = calculatePersonalityType(responses); // Implement this function
  const quizResponse = new QuizResponse({ userId, responses, personalityType });
  await quizResponse.save();
  res.json({ personalityType });
});

function calculatePersonalityType(responses) {
  // Logic to determine personality type based on responses
  return "Type A"; // Example
}

module.exports = router;
