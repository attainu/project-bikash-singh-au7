const controller = {};
const categoryModel = require("../models/categoryModel");
const businessModel = require("../models/businessModel");
const userModel = require("../models/userModel")
const mongoose = require("mongoose");
const commentModel = require("../models/commentModel");

// Get My Profile
controller.userProfile = (req, res) => {
  userModel.findOne({_id: mongoose.Types.ObjectId(req.user._id) }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      result.password = undefined
      res.status(200).json({ success: true, data: result });
    }
  });
};

// Update User Profile
controller.updateUser = (req, res) => {
  const body = req.body;
  // console.log(body);
  const { _id, name, email, mobile} = body;
  const errors = {
    name: "",
    email: "",
    mobile: "",
    success: true,
    message: "",
  };

  if (name == "") errors.name = "Name is required";
  if (email == "") errors.email = "Email is required";
  if (mobile == "") errors.mobile = "Mobile is required";


  if (errors.name || errors.email || errors.mobile) {
    errors.success = false;
    return res.json(errors);
  }
  userModel.findByIdAndUpdate({ _id }, body, (error, result) => {
    if (!error) {
      errors.data = result;
      errors.message = "Updated Successfully !!";
      return res.json(errors);
    } else {
      errors.success = false;
      errors.error = error;
      errors.message = "Error occured while updating the data";
      return res.json(errors);
    }
  });
};

// Get All Category
controller.allCategory = (req, res) => {
  categoryModel.find({ status: true }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  });
};

// Get All Category For Website
controller.allCategoryForWeb = (req, res) => {
  categoryModel.find({ status: true }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  })
}

// Add Business
controller.addBusiness = (req, res) => {
  const body = req.body;
  const userData = req.user
  body.user = userData._id
  console.log(body)
  body.slug = body.slug.toString()
  const {
    title,
    category,
    slug,
    user,
    mobile,
    description,
    email,
    address,
    state,
    city,
    pinCode
  } = body;

  const errors = {
    title: '',
    category: '',
    slug: '',
    user:'',
    mobile: '',
    description: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pinCode: '',
    success: true,
    message: '',
  };

  if (title == "") errors.title = "Please Enter Title";
  if (category == "") errors.category = "Please Select Category";
  if (slug == "") errors.slug = "Please Enter Slug";
  if (mobile == "") errors.mobile = "Please Enter Mobile";
  if (description == "") errors.description = "Please Enter Description";
  if (email == "") errors.email = "Please Enter Email";
  if (address == "") errors.address = "Please Enter Address";
  if (state == "") errors.state = "Please Enter state";
  if (city == "") errors.city = "Please Enter City";
  if (pinCode == "") errors.pinCode = "Please Enter Pin Code";
  if (user == "") errors.user = "User Id is required";

  if (errors.title || errors.slug || errors.category || errors.mobile || errors.description || errors.email || errors.address || errors.state || errors.city || errors.pinCode) {
    errors.success = false;
    return res.json(errors);
  } else {

  
    businessModel.findOne({slug}, (err, data)=>{
      if(!err && !data){
        body.user = mongoose.Types.ObjectId(body.user)
        body.category = mongoose.Types.ObjectId(body.category)
        
        const businessData = new businessModel(body);
        businessData.save((e, result) => {
          if (e) {
            errors.success = false;
            errors.message = "Some Error occured while saving the data";
            errors.error = e;
            return res.json(errors);
          } else {
            errors.success = true;
            errors.message = "Business Added";
            return res.json(errors);
          }
        });
      }else{
        errors.success = false;
        errors.slug = "This Slug is Already Exists";
        return res.json(errors);
      }
    })
    
  }
};

// Pending Listing
controller.pendingBusiness = (req, res)=>{
  const user = req.user
  businessModel.find({ status: false, user: user._id }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate('user', 'name').populate('category', 'title')
}

// Pending Listing
controller.publishedBusiness = (req, res)=>{
  const user = req.user
  businessModel.find({ status: true, user: user._id }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate('user', 'name').populate('category', 'title')
}

// Get All Business For Website 
controller.allBusinessForWeb = (req, res) => {
  businessModel.find({status: true}, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate("category")
  .populate("user", "_id, name")
}

// Get Business Accouring to Slug
controller.getBusinessAcdSlug = (req, res)=>{
  const user = req.user
  const slug = req.params.slug
  businessModel.findOne({ user: user._id, slug: slug }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  })
}

// Get Business Accouring to Slug
controller.getBusinessAcdSlugForWeb = (req, res)=>{
  const slug = req.params.slug
  businessModel.find({slug: slug }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate("category")
  .populate("user", "_id, name").lean()
}

// Get Business Accouring to Category for web
controller.getBusinessForWebAcdCategory = (req, res)=>{
  const slug = req.params.slug
  businessModel.find({status: true }, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate({path:'category', match:{slug: slug}})
  .populate("user", "_id, name")
}

// Search Query for web
controller.searchQueryForWeb = (req, res)=>{
  const query = req.params.query
  const catQuery = req.params.catQuery
  let finalQuery = { title: { $regex: new RegExp(query, "i") }}
  if(catQuery != 'null'){
    finalQuery = { title: { $regex: new RegExp(query, "i") }, category: mongoose.Types.ObjectId(catQuery)}
  }


  businessModel.find(finalQuery, (error, result) => {
    if (error) {
        res.status(200).json({
          success: false,
          error: error,
          message: "Oops Error Occured While Fetchning The data",
        });
      } else {
        res.status(200).json({ success: true, data: result });
      }
    }).populate({path:'category'})
    .populate("user", "_id, name")


  // businessModel.find({status: true }, (error, result) => {
  //   if (error) {
  //     res.status(200).json({
  //       success: false,
  //       error: error,
  //       message: "Oops Error Occured While Fetchning The data",
  //     });
  //   } else {
  //     res.status(200).json({ success: true, data: result });
  //   }
  // }).populate({path:'category', match:{slug: slug}})
  // .populate("user", "_id, name")
}

// Update Business
controller.updateBusiness = (req, res) => {
  
  const body = req.body;
  const {
    _id,
    title,
    category,
    slug,
    mobile,
    description,
    email,
    address,
    state,
    city,
    pinCode
  } = body;

  const errors = {
    title: '',
    category: '',
    slug: '',
    mobile: '',
    description: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pinCode: '',
    success: true,
    message: '',
  };

  // return res.json({w:'wecoome'})

  if (title == "") errors.title = "Please Enter Title";
  if (category == "") errors.category = "Please Select Category";
  if (slug == "") errors.slug = "Please Enter Slug";
  if (mobile == "") errors.mobile = "Please Enter Mobile";
  if (description == "") errors.description = "Please Enter Description";
  if (email == "") errors.email = "Please Enter Email";
  if (address == "") errors.address = "Please Enter Address";
  if (state == "") errors.state = "Please Enter state";
  if (city == "") errors.city = "Please Enter City";
  if (pinCode == "") errors.pinCode = "Please Enter Pin Code";

  if (errors.title || errors.slug || errors.category || errors.mobile || errors.description || errors.email || errors.address || errors.state || errors.city || errors.pinCode) {
    errors.success = false;
    return res.json(errors);
  } else {

    businessModel.findByIdAndUpdate({_id: _id}, body, (err, data)=>{
      if(!err){
        errors.success = true;
        errors.message = "Business Updated";
        return res.json(errors);
      }else{
        errors.success = false;
        errors.slug = "Oops error occured While updating Business";
        return res.json(errors);
      }
    })
    
  }
};

// Delete Business
controller.deleteBusiness = (req, res) =>{
  const _id = mongoose.Types.ObjectId(req.body._id)
  businessModel.findByIdAndDelete({_id}, (err, data)=>{
    if(!err){
      res.json({success:true, message:"Business Deleted Successfully"})
    }else{
      res.json({success:false, message:"Oops Error Occured while Deleting"})
    }
  })
}

// Add Comment
controller.addComment = (req, res) => {
  const body = req.body;
  const user = req.user._id
  body.user = user

  const { comment, business } = body;
  const errors = {
    user: "",
    business: "",
    comment: "",
    success: true,
    message: "",
  };

  if (user == "") errors.user = "User is Required";
  if (comment == "") errors.comment = "Please Enter Comment";
  if (business == "") errors.business = "Business Id Missing";

  if (errors.user || errors.comment || errors.business) {
    errors.success = false;
    return res.json(errors);
  } else {
    const commentData = new commentModel(body);
    commentData.save((e, data) => {
      if (e) {
        errors.success = false;
        errors.message = "Some Error occured while saving the data";
        errors.error = e
        return res.json(errors);
      } else {
        errors.success = true;
        errors.message = "Comment Added";
        return res.json(errors);
      }
    });
  }
};

// Get Comments Accouring to Business for web
controller.getCommentsForWebAcdBusiness = (req, res)=>{
  const business = req.params.business
  commentModel.find({business}, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate("user").sort({created_date: -1})
}

// submited Comment
controller.submitedComment = (req, res)=>{
  const user = req.user._id
  commentModel.find({user}, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error Occured While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  }).populate("business")
  .populate("user")
}

// Delete Comment
controller.deleteComment = (req, res) =>{
  const _id = mongoose.Types.ObjectId(req.body._id)
  commentModel.findByIdAndDelete({_id}, (err, data)=>{
    if(!err){
      res.json({success:true, message:"Comment Deleted Successfully"})
    }else{
      res.json({success:false, message:"Oops Error Occured while Deleting"})
    }
  })
}

module.exports = controller;
