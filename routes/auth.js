const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/register", (req, res) => {
  authController.showRegisterView(req, res);
});

router.get("/login", function (req, res) {
  authController.showLoginView(req, res);
});

module.exports = router;
