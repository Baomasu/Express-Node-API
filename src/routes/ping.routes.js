const express = require("express");
const router = express.Router();
const path = require("path");
const getPing = require(path.join(__dirname, "../controllers/ping.controllers.js"));
const insertPing = require(path.join(__dirname, "../controllers/ping.controllers.js"));


router.get("/ping", getPing);
router.post("/ping", insertPing);

module.exports = router;
