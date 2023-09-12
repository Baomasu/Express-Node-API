 require("dotenv").config();

const PORT = process.env.PORT || 5555;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'SQLpass1423@';
const DB_PORT = process.env.DB_PORT || '3306';
const DATABASE = process.env.DATABASE || 'mynewdb';

module.exports = {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DATABASE};