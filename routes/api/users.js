const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
// @route POST api/users
// description: this route register user

router.post(
  "/",
  [
    check("name", "I need your name pal!").not().isEmpty(),
    check("email", "Email is much needed give or go!").isEmail(),
    check(
      "password",
      "enter your secret key with 6 or more character"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);

module.exports = router;
