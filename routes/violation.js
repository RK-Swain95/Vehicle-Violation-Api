const express = require('express');
const router = express.Router();
//const passport=require('passport');
const violationApi=require('../controllers/violation_controller');
router.post('/create/:id',violationApi.create);
router.delete('/delete/:id',violationApi.delete);
router.post('/update/:id',violationApi.update)
module.exports=router;