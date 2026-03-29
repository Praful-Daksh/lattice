const joi = require('joi');

const createEventValidation = async(req,res,next)=>{
    const schema = joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        date:joi.date().required(),
        total_capacity:joi.number().required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message:"Invalid/Incomplete Data",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = {
    createEventValidation
}
