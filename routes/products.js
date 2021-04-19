const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const productsController = require("../controllers/productsController");
const strings = require("../constants/strings");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// Multer config
const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../public/images/products");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    const imageName = uuidv4() + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const fileUpload = multer({ storage: multerDiskStorage });

// Express validator
const validateCreateProduct = [
  check("name")
    .notEmpty()
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_NAME_EMPTY)
    .isLength({
      min: 3,
      max: 45,
    })
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_NAME_LENGTH),
  check("description")
    .notEmpty()
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_DESCRIPTION_EMPTY)
    .isLength({
      min: 3,
      max: 500,
    })
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_DESCRIPTION_LENGTH),
  check("category")
    .notEmpty()
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_CATEGORY_EMPTY),
  check("colors")
    .notEmpty()
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_COLOR_EMPTY),
  check("price")
    .notEmpty()
    .withMessage(strings.VALIDATE_CREATE_PRODUCT_PRICE_EMPTY),
];

router.get("/create", function (req, res) {
  productsController.showNewProductView(req, res);
});

router.get("/edit", function (req, res) {
  productsController.showEditProductView(req, res);
});

router.get("/:productId", function (req, res) {
  productsController.showproductsView(req, res);
});

router.post(
  "/",
  [fileUpload.single("image"), validateCreateProduct],
  function (req, res) {
    productsController.createNewProduct(req, res);
  }
);

router.get("/", function (req, res) {
  productsController.showProductList(req, res);
});

router.get("/categories/:category", function (req, res) {
  productsController.showProductListByCategory(req, res);
});

router.delete("/:productId", function (req, res) {
  productsController.deleteProduct(req, res);
});

module.exports = router;
