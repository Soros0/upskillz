const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, age, sex, country } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, age, sex, country });
  await user.save();
  res.status(201).send("User registered");
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, config.jwtSecret);
    res.json({ token });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

module.exports = router;
