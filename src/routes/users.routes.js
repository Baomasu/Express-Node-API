const express = require("express");
const router = express.Router();
const path = require("path");
const {check} = require("express-validator");
const signUpUser = require(path.join(__dirname, "../controllers/users.controllers.js"));


router.post("/user",[
    check("email", "Please provide a valid email").isEmail(),
    check("password", "please provide a password").isLength( { min : 6 } )
], signUpUser);

module.exports = router;
