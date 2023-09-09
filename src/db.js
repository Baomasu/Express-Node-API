const { createPool } = require('mysql2');


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'SQLpass1423@',
    port: '3306',
    database: 'mynewdb'
  })


module.exports = pool;