var express = require("express");
var router = express.Router();

router.get("/:productId", function (req, res) {
  const productId = req.params.productId;

  res.render("product", { productId: productId });
});

module.exports = router;
