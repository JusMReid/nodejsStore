const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    const products = adminData.products;
    //render the dynamic template
    res.render('shop', {prods: products,docTitle:'My Shop', path : '/'});
    // console.log(adminData.products);
    // //console.log('In another middleware');
    // //res.send('<h1>Hello from express</h1>');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;