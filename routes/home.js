const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", function (req, res) {
  homeController.showHomeView(req, res);
});

router.get("/fonts", function (req, res) {
  homeController.showFontsView(req, res);
});

module.exports = router;
