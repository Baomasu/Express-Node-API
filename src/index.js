const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejs = require('ejs');


//Import routes
const productRoutes = require(path.join(__dirname, "routes/products"));
const animationRoutes = require(path.join(__dirname, "routes/animations"));

//Server setup
const app = express();
app.set("appName", "Express-API");
app.set("port", "5555");
//app.set('case sensitive routing', true);
const port = process.env.PORT || app.get("port");
app.listen(port, () =>
  console.log(`Server ${app.get("appName")} started on port ${port}`)
);

//Template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MiddleWares
app.use(morgan("dev")); //console messeges.
app.use(express.text()); //text.
app.use(express.json()); //json.
app.use(express.urlencoded({ extended: false })); //string/arrays.
//app.use("/static", express.static(path.join(--path.dirname, 'static')));
app.use("/", express.static(path.join(__dirname, "static")));

//routes
app.use(productRoutes);
app.use(animationRoutes);
