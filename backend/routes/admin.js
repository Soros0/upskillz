const express = require("express");
const router = express.Router();
const User = require("../models/User");
const QuizResponse = require("../models/QuizResponse");
const authMiddleware = require("../authMiddleware");

router.get("/users", authMiddleware, async (req, res) => {
  const users = await User.find().populate("quizResponses");
  res.json(users);
});

module.exports = router;
