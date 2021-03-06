//const http = require('http');
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
//const expressHbs = require("express-handlebars");

const app = express();

const pnfController = require('./controllers/pnf.js');
/*
With handlebars, we need to register the engine
app.engine(
  "hbs",
  expressHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout",
extname: 'hbs' })
);
app.set("view engine", "hbs");
*/

//app.set('view engine', 'pug');
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

/*
app.use('/', (res,req,next)=>{
    //console.log('This always runs!');
    next();
}); */

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(pnfController.getPNF
    //Below logic moved to a controller
//   (req, res, next) => {
//   res.status(404).render("pnf", { docTitle: "PAGE NOT FOUND" });
//   // res.status(404).sendFile(path.join(__dirname, "views", "pnf.html"));
// }
);

/*const server = http.createServer(app);
server.listen(3000); */

app.listen(3000);
