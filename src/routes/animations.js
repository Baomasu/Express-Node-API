const express = require("express");
const router = express.Router();


//"DataBase" made with an array.
let animations = [
  {
    title: "Circles",
    library: "p5",
    id: 1
  },
  {
    title: "Mei",
    library: "processing",
    id: 2
  },
  {
    title: "TNT",
    library: "p5",
    id: 3
  },
];


//imported routes
router.get("/animation", (req, res) => {
  const tittleWelcome = "Bienvenido a animaciones."
  res.render('animations', {tittleWelcome, animations});
});

router.post("/animation", (req, res) => {
  const newProduct = { ...req.body, id: animations.length + 1 };
  animations.push(newProduct);
  res.send(newProduct);
});

router.put("/animation/:id", (req, res) => {
  const newData = req.body;
  const productFound = animations.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "product not found." });

  //Recorre el arreglo por cada producto en el arreglo,
  //si es true vas a actualizar los valores, caso contrario vas a conservar el producto como es.
  animations = animations.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({ message: "product update succesfully" });
});

router.delete("/animation/:id", (req, res) => {
  //validate if product exists
  const productFound = animations.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ message: "product not found." });
  }

  //filter function returns the array with the data without the id from the req.
  animations = animations.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

router.get("/animation/:id", (req, res) => {
  const productFound = animations.find((p) => p.id === parseInt(req.params.id));
  if (!productFound)
    return res.status(404).json({ message: "product not found." });

  console.log(productFound);
  res.json(productFound);
});

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
