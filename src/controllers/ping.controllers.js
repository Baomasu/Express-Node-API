const path = require("path");
const pool = require(path.join(__dirname, "../db.js"));

const getPing = (req, res) => {
  pool.query(`SELECT * FROM employee;`, (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    res.json(result);
    console.log(result);
  });
};

const insertPing = (req, res) => {
  let query = `INSERT INTO employee(name, salary) VALUES (?, ?);`;

  //Values to be inserted
  const { name, salary } = req.body;
  console.log('hola francia');
  //creating queries
  pool.query(query, [name, salary], (err, rows) => {
    if (err) throw err;
  });
};

module.exports = getPing, insertPing;
