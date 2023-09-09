const express = require("express");
const router = express.Router();
const path = require("path");
const {getProduct, postProduct, putProduct, deleteProduct, getByIdProduct} = require(path.join(__dirname, "../controllers/products.controllers.js"));


router.get("/products", getProduct);

router.post("/products", postProduct);

router.put("/products/:id", putProduct);

router.delete("/products/:id", deleteProduct);

router.get("/products/:id", getByIdProduct);

//MiddleWare de validacion de usuario por medio de query
//para acceder a determinadas rutas.
// router.use((req, res, next) => {
//   if (req.query.login === "baomass@login.com") {
//     next();
//   } else {
//     if (typeof req.query.login === "undefined") {
//       res.send(`Usuario no identificado.`);
//     } else {
//       res.send(`Usuario ${req.query.login} no autorizado.`);
//     }
//   }
// });

module.exports = router;