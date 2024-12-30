const express = require('express');
const router= express.Router();
const {createUser} =require("../controllers/userCtrlr");

router.post("/register",createUser);

module.exports=router;