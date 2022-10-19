const express = require('express');
const router = express.Router();
//const passport=require('passport');
router.use('/vehicle',require('./vehicle'));

//for api folder
router.use('/violation',require('./violation'));
module.exports=router;