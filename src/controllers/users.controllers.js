const path = require("path");
const { validationResult } = require("express-validator");
const pool = require(path.join(__dirname, "../db.js"));


const signUpUser = (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }else
    {
        res.json(req.body);
    }

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

module.exports = signUpUser;