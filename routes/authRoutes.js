const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authController");

const requireAuth = require("../middlewares/requireAuth");

router.get("/me", requireAuth, authController.me);
router.post("/signup", authController.signup);
router.post("/login", authController.login);

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
