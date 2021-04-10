const productsController = {
  showproductsView: (req, res) => {
    const productId = req.params.productId;

    res.render("products/product", { productId: productId });
  },
  showNewProductView: (req, res) => {
    res.render("products/new-product");
  },
  showEditProductView: (req, res) => {
    res.render("products/edit-product");
  },
};

module.exports = productsController;
