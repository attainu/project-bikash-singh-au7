const adminModel = require("../models/adminModel")
const jwt = require("jsonwebtoken")

const adminRequireLogin = (req, res, next)=>{
    const {authorization} = req.headers
    // console.log(authorization)
    if(authorization){
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, process.env.JWT_SECRET, (err, payload)=>{
            if(err){
                return res.json({message: "Please Login First", success: false})
            }else{
                adminModel.findOne({_id: payload._id}, (err, result)=>{
                    if(err){
                        return res.json({message: "Error Occured while fetching the data", success: false})
                    }else if(!result){
                        return res.json({message: "Invalid Credentials", success: false})
                    }else{
                        result.password = undefined
                        req.admin = result
                        next()
                    }
                    
                })
                
            }
        })
    }else{
        return res.json({message: "Authorization not available", success: false})
    }
    
}

module.exports = adminRequireLogin