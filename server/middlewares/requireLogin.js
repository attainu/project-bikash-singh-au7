const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const { use } = require("../routes/userAuthRoutes")

const requireLogin = (req, res, next)=>{
    const {authorization} = req.headers
    if(authorization){
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, process.env.JWT_SECRET, (err, payload)=>{
            if(err){
                return res.json({message: "Please Login First", success: false})
            }else{
                userModel.findOne({_id: payload._id}, (err, user)=>{
                    if(err){
                        return res.json({message: "Error Occured while fetching the data", success: false})
                    }else{
                        user.password = undefined
                        req.user = user
                        next()
                    }
                    
                })
                
            }
        })
    }else{
        return res.json({message: "not available"})
    }
    
}

module.exports = requireLogin