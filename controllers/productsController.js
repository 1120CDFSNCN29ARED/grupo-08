const productsController = {
  showproductsView: (req, res) => {
    const productId = req.params.productId;

    res.render("product", { productId: productId });
  },
};

module.exports = productsController;
