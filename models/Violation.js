const mongoose =require('mongoose');
const violationSchema=new mongoose.Schema({
    licensePlateNumber:{
        type:Number,
        required:true
    },
    violationType:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },  
    location:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    },
    

},{
    timestamps:true
});

const  Violation=mongoose.model('Violation',violationSchema);
module.exports=Violation;