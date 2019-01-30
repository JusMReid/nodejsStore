//const http = require('http');
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');

//app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

/*
app.use('/', (res,req,next)=>{
    //console.log('This always runs!');
    next();
}); */

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('pnf', {docTitle: 'PAGE NOT FOUND'});
  // res.status(404).sendFile(path.join(__dirname, "views", "pnf.html"));
});

/*const server = http.createServer(app);
server.listen(3000); */

app.listen(3000);
