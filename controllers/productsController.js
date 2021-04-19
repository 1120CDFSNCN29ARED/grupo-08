const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const productsController = {
  showproductsView: (req, res) => {
    // Leer y traducir la base de datos
    const productsListFile = fs.readFileSync(
      path.join(__dirname, "../data/products.json"),
      { encoding: "utf8" }
    );
    const products = JSON.parse(productsListFile);

    // Buscar nuestro objeto por su id
    const product = products.find(
      (product) => product.id === req.params.productId
    );

    // Compartirlo a la vista
    res.render("products/product", { product: product });
  },
  showNewProductView: (req, res) => {
    res.render("products/new-product");
  },
  showEditProductView: (req, res) => {
    res.render("products/edit-product");
  },
  createNewProduct: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      // Create new product object
      const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        colors: req.body.colors,
        price: req.body.price,
        image: req.file.filename,
      };

      // Read products from JSON
      const productsListFile = fs.readFileSync(
        path.join(__dirname, "../data/products.json"),
        { encoding: "utf8" }
      );

      let products;

      // Check if file is empty
      if (productsListFile === "") {
        products = [];
      } else {
        products = JSON.parse(productsListFile);
      }

      // Add new product to array
      products.push(newProduct);

      // Convert object into string
      const productsJSON = JSON.stringify(products);

      // Write json file
      fs.writeFileSync(
        path.join(__dirname, "../data/products.json"),
        productsJSON
      );

      res.render("sucess-product", { productTitle: req.body.name });
    } else {
      res.render("products/new-product", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  showProductList: (req, res) => {
    const productsListFile = fs.readFileSync(
      path.join(__dirname, "../data/products.json"),
      { encoding: "utf8" }
    );
    const products = JSON.parse(productsListFile);

    res.render("products/products", { products: products });
  },
  showProductListByCategory: (req, res) => {
    const productsListFile = fs.readFileSync(
      path.join(__dirname, "../data/products.json"),
      { encoding: "utf8" }
    );
    const products = JSON.parse(productsListFile);
    const filtedProduct = products.filter(
      (product) => product.category === req.params.category
    );

    res.render("products/products", { products: filtedProduct });
  },
  deleteProduct: (req, res) => {
    const productId = req.params.productId;

    const productsListFile = fs.readFileSync(
      path.join(__dirname, "../data/products.json"),
      { encoding: "utf8" }
    );
    const products = JSON.parse(productsListFile);

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        products.splice(i, 1);

        break;
      }
    }

    // Convert object into string
    const productsJSON = JSON.stringify(products);

    // Write json file
    fs.writeFileSync(
      path.join(__dirname, "../data/products.json"),
      productsJSON
    );
  },
};

module.exports = productsController;
