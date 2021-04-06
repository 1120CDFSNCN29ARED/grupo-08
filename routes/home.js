var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/fonts", function (req, res) {
  res.render("fonts");
});

module.exports = router;
