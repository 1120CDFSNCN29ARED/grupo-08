const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/:productId", function (req, res) {
  productsController.showproductsView(req, res);
});

module.exports = router;
