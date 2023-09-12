const { createPool } = require('mysql2');
const path = require("path");
const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DATABASE} = require(path.join(__dirname, "config.js"));

const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DATABASE
  })


module.exports = pool;