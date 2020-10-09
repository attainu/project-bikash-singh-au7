const adminModel = require("../models/adminModel");
const jwt = require('jsonwebtoken')
const controller = {};

controller.signup = (req, res) => {
  const body = req.body;
  // body.password = adminModel.
  const { name, email, password } = body;
  const errors = {
    name: "",
    email: "",
    password: "",
    success: true,
    message: "",
  };

  if (name == "") errors.name = "Please Enter Name";
  if (email == "") errors.email = "Please Enter Email";
  if (password == "") errors.password = "Please Enter Password";

  if (errors.name || errors.email || errors.password) {
    errors.success = false;
    return res.json(errors);
  } else {
    adminModel.findOne({ email: body.email }, (err, data) => {
      if (!err) {
        if (data) {
          errors.success = false;
          errors.message = "Email Allready Exist";
          return res.json(errors);
        } else {
          const adminData = new adminModel(body);
          adminData.password = adminData.encryptPassword(body.password)
          adminData.save((e, data) => {
            if (e) {
              errors.success = false;
              errors.message = "Some Error occured while saving the data"; 
              return res.json(errors);             
            } else {
              errors.success = true;
              errors.message = "Signup Successfully";
              return res.json(errors);
            }
          });
        }
      }else{
        errors.success = false;
        errors.message = "Error occured while fatching the data";
        return res.json(errors);
      }
    });
  }
};

controller.login = (req, res, next) => {
  const body = req.body;
  const { email, password } = body;
  const errors = {
    email: "",
    password: "",
    success: true,
    message: "",
  };

  if (email == "") errors.email = "Please Enter Email"
  if (password == "") errors.password = "Please Enter Password"

  if (errors.email || errors.password) {
    errors.success = false;
    return res.json(errors);
  }else{
      adminModel.findOne({email: email}, (err, data)=>{
          if(!err){
              if(data){
                if(data.decryptPassword(password)){
                    errors.message = "Login Successfully"
                    data.password = undefined
                    errors.data = data
                    const token = jwt.sign({_id: data._id}, process.env.JWT_SECRET)
                    errors.token = token
                    return res.json(errors)
                    
                }else{
                    errors.message = "Password Does't matched"
                    errors.success = false
                    return res.json(errors)
                }
              }else{
                errors.message = "Invalid Email"
                errors.success = false
                return res.json(errors)
              }
          }else{
            errors.message = "Error occured while fetching the data"
            errors.error = err
            errors.success = false
            return res.json(errors)
          }
      })
  }
}
module.exports = controller;