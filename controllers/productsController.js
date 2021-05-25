const { validationResult } = require("express-validator");
const db = require("../database/models");

const productsController = {
  showproductsView: async (req, res) => {
    // Buscar uno solo en vez de buscar muchos
    const product = await db.Products.findByPk(req.params.productId);

    // Compartirlo a la vista
    res.render("products/product", { product: product });
  },
  showNewProductView: async (req, res) => {
    res.render("products/new-product");
  },
  showEditProductView: (req, res) => {
    res.render("products/edit-product");
  },
  createNewProduct: (req, res) => {
    const errors = validationResult(req); // resultado de la validacion

    if (errors.isEmpty()) {
      // Crear un objecto de sequelize con los datos
      const newProduct = db.Products.build({
        title: req.body.name,
        description: req.body.description,
        category: req.body.category,
        color: req.body.colors,
        price: req.body.price,
        image: req.file.filename,
      });

      // Guardamos el objecto en la base de datos
      newProduct.save();

      res.render("sucess-product", { productTitle: req.body.name });
    } else {
      res.render("products/new-product", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  showProductList: async (req, res) => {
    const products = await db.Products.findAll();

    res.render("products/products", { products: products });
  },
  showProductListByCategory: async (req, res) => {
    const products = await db.Products.findAll({
      where: {
        category: req.params.category,
      },
    });

    res.render("products/products", { products: products });
  },
  deleteProduct: async (req, res) => {
    const productId = req.params.productId;

    // Buscar uno solo en vez de buscar muchos
    await db.Products.destroy({
      where: {
        id: productId,
      },
    });

    // Usar redirect en vez de render para mantener la url orginal
    res.redirect("back");
  },
  showEditForm: async (req, res) => {
    // Buscar uno solo en vez de buscar muchos
    const product = await db.Products.findByPk(req.params.productId);

    // Compartirlo a la vista;
    res.render("products/edit-product", { product: product });
  },
  editProduct: async (req, res) => {
    const errors = validationResult(req);

    // Buscar uno solo en vez de buscar muchos
    const product = await db.Products.findByPk(req.params.productId);

    if (errors.isEmpty()) {
      // Modificamos el objeto de product
      product.name = req.body.name;
      product.description = req.body.description;
      product.category = req.body.category;
      product.colors = req.body.colors;
      product.price = req.body.price;

      if (req.file && req.file.file) {
        product.image = req.file.filename;
      }

      product.save();

      res.redirect("back");
    } else {
      res.render("products/edit-product", {
        errors: errors.mapped(),
        old: req.body,
        product: product,
      });
    }
  },
};

module.exports = productsController;
