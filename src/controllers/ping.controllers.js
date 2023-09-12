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
  let nombre = req.body.name;
  let salario = req.body.salary;
  let sql = "INSERT INTO employee (name,salary) VALUES(?,?);";

  pool.query(sql, [nombre, salario], (err, result) => {
    if (err) throw err;
    console.log("POSTED");
    res.end();
  });
};

const getPingById = (req, res) => {
  pool.query(
    `SELECT * FROM employee WHERE id=?;`,
    [req.params.id],
    (err, result, fields) => {
      if (err) {
        return console.log(err);
      }
      if (result.length <= 0) {
        res.send("Employee not found.");
        console.log("Employee not found.");
      } else {
        res.json(result);
        console.log(result);
      }
    }
  );
};

const deletePing = (req, res) => {
  pool.query(
    `DELETE FROM employee WHERE id=?;`,
    [req.params.id],
    (err, result, fields) => {
      if (err) {
        console.log(err);
        res.send("invalid imput.");
      } else {
        if (result.affectedRows <= 0) {
          res.send("Employee not found.");
          console.log("Employee not found.");
        } else {
          res.json(result);
          console.log(result);
        }
      }
    }
  );
};

const patchPing = (req, res) => {
  pool.query(
    `UPDATE employee SET name=IFNULL(?,name), salary=IFNULL(?,salary) WHERE id=?;`,
    [req.body.name,req.body.salary,req.params.id],
    (err, result, fields) => {
      if (err) {
        console.log(err);
        res.send("invalid imput.");
      } else {
        if (result.affectedRows <= 0) {
          res.send("Employee not found.");
          console.log("Employee not found.");
        } else {
          res.json(result);
          console.log(result);
        }
      }
    }
  );
};

module.exports = { getPing, insertPing, getPingById, patchPing, deletePing };
