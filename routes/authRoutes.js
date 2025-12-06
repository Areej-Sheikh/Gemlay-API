const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authController");

// Local auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleCallback
);

module.exports = router;
