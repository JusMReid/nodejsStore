//For all the product logic

const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
    //console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect("/");
  };

  exports.getProducts = (req, res, next) => {
    //render the dynamic template
    res.render("shop", {
      prods: products,
      docTitle: "My Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
    // console.log(adminData.products);
    // //console.log('In another middleware');
    // //res.send('<h1>Hello from express</h1>');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }