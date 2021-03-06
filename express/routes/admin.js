const path = require("path");

const express = require("express");

//const rootDir = require("../utils/path");

const productsController = require("../controllers/products.js");

const router = express.Router();

// const products = [];

// /admin/add-product -->GET
router.get(
  "/add-product",
  productsController.getAddProduct
  //---------------------------
  //Below logic moved into a controller
  //-----------------------
  // (req, res, next) => {
  //   res.render("add-product", {
  //     docTitle: "Add Product",
  //     path: "/admin/add-product",
  //     formsCSS: true,
  //     productCSS: true,
  //     activeAddProduct: true
  //   });
  //   // //console.log('In another middleware');
  //   // //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>');
  //   // res.sendFile(path.join(rootDir, 'views','add-product.html'));
  // }
);

// /admin/add-product -->POST
router.post(
  "/add-product", productsController.postAddProduct
  //----------------------------
  //Below logic moved into a controller
  // (req, res, next) => {
  //   //console.log(req.body);
  //   products.push({ title: req.body.title });
  //   res.redirect("/");
  // }
);

//exports.routes = router;
//exports.products = products;

module.exports = router;