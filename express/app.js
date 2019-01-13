//const http = require('http');
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pnf.html"));
});

/*const server = http.createServer(app);
server.listen(3000); */

app.listen(3000);
