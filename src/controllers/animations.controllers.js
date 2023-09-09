const path = require("path");
const pool = require(path.join(__dirname, "../db.js"));

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


const getAnimation = (req, res) => {
    const tittleWelcome = "Bienvenido a animaciones."
    res.render('animations', {tittleWelcome, animations});
  };

const postAnimation = (req, res) => {
  const newProduct = { ...req.body, id: animations.length + 1 };
  animations.push(newProduct);
  res.send(newProduct);
};

const putAnimation =  (req, res) => {
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
  };

const deleteAnimation =  (req, res) => {
  //validate if product exists
  const productFound = animations.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ message: "product not found." });
  }

  //filter function returns the array with the data without the id from the req.
  animations = animations.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
};

const getByIdAnimation =  (req, res) => {
    const productFound = animations.find((p) => p.id === parseInt(req.params.id));
    if (!productFound)
      return res.status(404).json({ message: "product not found." });
  
    console.log(productFound);
    res.json(productFound);
  };

module.exports = {getAnimation, postAnimation, putAnimation, deleteAnimation, getByIdAnimation};