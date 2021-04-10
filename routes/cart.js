const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", (req, res) => {
  cartController.showCartView(req, res);
});

module.exports = router;
