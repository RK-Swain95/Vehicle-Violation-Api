const Vehicle=require('../models/Vehicle');
const Violation=require('../models/Violation');


module.exports.create=async function(req,res){
    try{
        const vehicle= await Vehicle.findById(req.params.id);
        const lno=vehicle.licensePlateNumber;
       // console.log(lno);
       await Violation.create({
        licensePlateNumber:lno,
        violationType:req.body.violationType,
        status:req.body.status,
        date:req.body.date,
        location:req.body.location,
        videoUrl:req.body.videoUrl
     });
     return res.json(200,{
        message:"violation report created  successfully"
    });

    }catch(err){
        return res.json(500,{
            message:"error in creating violation"
        });

    }
   
}

module.exports.delete=async function(req,res){
    try{
        const violation= await Violation.findByIdAndDelete(req.params.id);
        if(!violation){
            return res.json(200,{
                message:"Invaid violation Id"
            });
        }
        return res.json(200,{
            message:"violation deleted  successfully",
           deleted_violation: violation
        });
    }catch(err){
        return res.json(500,{
            message:"error in deleting violation !!"
        });
    }
 

}

module.exports.update=async function(req,res){
    try{
         await Violation.findByIdAndUpdate(req.params.id,{
            'violationType':req.body.violationType,
            'status':req.body.status,
            'date':req.body.date,
            'location':req.body.location,
            'videoUrl':req.body.videoUrl


         });
        const violation=await Violation.findById(req.params.id);
        return res.json(200,{
            message:"violation updated  successfully",
           deleted_violation: violation
        });
    }catch(err){
        return res.json(500,{
            message:"error in updating violation !!"
        });
    }
 

}