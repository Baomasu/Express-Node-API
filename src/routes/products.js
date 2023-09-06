const express = require("express");
const router = express.Router();

//"DataBase" made with an array.
let products = [
  {
    nombre: "Gaming Keyboard",
    precio: 400,
    color: "Blanco",
    id: 1
  },
  {
    nombre: "USB cable",
    precio: 300,
    color: "Negro",
    id: 2
  },
  {
    nombre: "Gaming Monitor",
    precio: 2500,
    color: "Negro",
    id: 3
  },
];

router.get("/products", (req, res) => {
    const tittleWelcome = "Bienvenido a productos."
    res.render('products', {tittleWelcome, products});
});

router.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

router.put("/products/:id", (req, res) => {
  const newData = req.body;
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "product not found." });

  //Recorre el arreglo por cada producto en el arreglo,
  //si es true vas a actualizar los valores, caso contrario vas a conservar el producto como es.
  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({ message: "product update succesfully" });
});

router.delete("/products/:id", (req, res) => {
  //validate if product exists
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ message: "product not found." });
  }

  //filter function returns the array with the data without the id from the req.
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

router.get("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "product not found." });

  console.log(productFound);
  res.json(productFound);
});

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