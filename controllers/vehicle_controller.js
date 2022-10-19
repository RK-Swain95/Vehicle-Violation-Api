const Vehicle=require('../models/Vehicle');


//to create registration for doctors
module.exports.create= function(req,res){
    Vehicle.findOne({licensePlateNumber:req.body.licensePlateNumber},function(err,vehicle){
        if(err){
            return res.status(500).json({
                messsage:"error in database !!"});
        }
        //if doctor is not in db
        if(!vehicle){
            Vehicle.create(req.body);
            return res.status(200).json({
                messsage:"vehicle registration successful"
            });
            //if doctor already present
        }else{
            return res.status(200).json({
                messsage : "vehicle already exist"
            });
        }
    })
}

module.exports.delete=async function(req,res){
    try{
        const vehicle= await Vehicle.findByIdAndDelete(req.params.id);
        if(!vehicle){
            return res.json(200,{
                message:"Invaid vehicle Id"
            });
        }
        return res.json(200,{
            message:"vehicle deleted  successfully",
           deleted_vehicle: vehicle
        });
    }catch(err){
        return res.json(500,{
            message:"error in deleting vehicle !!"
        });
    }
 

}


module.exports.update=async function(req,res){
   // console.log("hi");
    try{
        await Vehicle.findOneAndUpdate(req.params.id,{
            'insuranceUpto':req.body.insuranceUpto,
            'fitnessUpto':req.body.fitnessUpto,
            'roadTaxUpto':req.body.roadTaxUpto,
            'ownerName':req.body.ownerName,
            'rc_status':req.body.rc_status
        
        });
        const vehicle=await Vehicle.findById(req.params.id);
        return res.json(200,{
            message:"vehicle updated  successfully",
           updateded_vehicle: vehicle
        });

    }catch(err){
        return res.json(500,{
            message:"error in updating vehicle !!"
        });
    }
}