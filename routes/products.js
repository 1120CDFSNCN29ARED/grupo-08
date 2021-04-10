const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/new-product", function (req, res) {
  productsController.showNewProductView(req, res);
});

router.get("/edit-product", function (req, res) {
  productsController.showEditProductView(req, res);
});

router.get("/:productId", function (req, res) {
  productsController.showproductsView(req, res);
});

module.exports = router;
