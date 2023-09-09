const express = require("express");
const router = express.Router();
const path = require("path");
const {getAnimation, postAnimation, putAnimation, deleteAnimation, getByIdAnimation} = require(path.join(__dirname, "../controllers/animations.controllers.js"));

//imported routes
router.get("/animation", getAnimation);

router.post("/animation", postAnimation);

router.put("/animation/:id", putAnimation);

router.delete("/animation/:id", deleteAnimation);

router.get("/animation/:id", getByIdAnimation);

//MiddleWare de validaciond de usuario por medio de query
//para acceder a determinadas rutas
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
