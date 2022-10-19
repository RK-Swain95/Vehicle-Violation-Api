const express = require('express');
const router = express.Router();
const vehicleApi=require('../controllers/vehicle_controller')
router.post('/create',vehicleApi.create);
router.delete('/delete/:id',vehicleApi.delete);
router.post('/update/:id',vehicleApi.update);
module.exports=router;