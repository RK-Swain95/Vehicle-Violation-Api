const mongoose =require('mongoose');
const vehicleSchema=new mongoose.Schema({
    licensePlateNumber:{
        type:Number,
        required:true
    },
    manufacturerName:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    fuelType:{
        type:String,
        required:true
    },  
    ownerName:{
        type:String,
        required:true
    },
    rc_status:{
        type:String,
        required:true
    },
    vehicleColor:{
        type:String,
        required:true
    },
    registrationDate:{
        type:String,
        required:true
    },
    insuranceUpto:{
        type:String,
        required:true
    },
    fitnessUpto:{
        type:String,
        required:true
    },
    roadTaxUpto:{
        type:String,
        required:true
    },

},{
    timestamps:true
});

const  Vehicle=mongoose.model('Vehicle',vehicleSchema);
module.exports=Vehicle;