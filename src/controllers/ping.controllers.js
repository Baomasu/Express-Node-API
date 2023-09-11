const path = require("path");
const pool = require(path.join(__dirname, "../db.js"));


///*
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
let sql = 'INSERT INTO employee (name,salary) VALUES(?,?);';

pool.query(sql, [nombre,salario], (err, result)=>{
  if(err) throw err;
  res.write('POSTED');
  res.end();
});
};

const getPingById = (req, res) => {
  pool.query(`SELECT * FROM employee WHERE id=1;`, (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    res.json(result);
    console.log(result);
  });
};

const putPing = (req,res)=>{};
const deletePing = (req,res)=>{};

//*/

module.exports = {getPing, insertPing, getPingById, putPing, deletePing};
