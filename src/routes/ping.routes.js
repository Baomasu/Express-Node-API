const express = require("express");
const router = express.Router();
const path = require("path");
const {getPing, insertPing, getPingById, putPing, deletePing} = require(path.join(__dirname, "../controllers/ping.controllers.js"));



router.get("/ping", getPing);
router.post("/ping", insertPing);
router.get("/ping/:id", getPingById);
router.put("/ping/:id", putPing);
router.delete("/ping/:id", deletePing);

module.exports = router;
