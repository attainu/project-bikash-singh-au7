const controller = {};
const adminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const categoryModel = require("../models/categoryModel");
const mongoose = require("mongoose");
const businessModel = require("../models/businessModel")

// Get All Users
controller.allUsers = (req, res) => {
  userModel.find({}, (error, result) => {
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

// Get My Profile
controller.adminProfile = (req, res) => {
  console.log(req.admin._id)
  adminModel.findOne({_id: mongoose.Types.ObjectId(req.admin._id) }, (error, result) => {
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


// Update Admin Profile
controller.updateAdmin = (req, res) => {
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
  adminModel.findByIdAndUpdate({ _id }, body, (error, result) => {
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


// Update User
controller.updateUser = (req, res) => {
  const body = req.body;
  // body.password = userModel.
  // console.log(body);
  const { _id, name, email, mobile, status } = body;
  const errors = {
    name: "",
    email: "",
    mobile: "",
    status: "",
    success: true,
    message: "",
  };

  if (name == "") errors.name = "Name is required";
  if (email == "") errors.email = "Email is required";
  if (mobile == "") errors.mobile = "Mobile is required";
  if (status.toString() == "") errors.status = "Status is required";

  if (errors.name || errors.email || errors.mobile || errors.status) {
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

// Add Category
controller.addCategory = (req, res) => {
  const body = req.body;
  const { title, slug, status, icon } = body;
  const errors = {
    title: "",
    slug: "",
    status: "",
    icon:"",
    success: true,
    message: "",
  };

  if (title == "") errors.title = "Please Enter Title";
  if (slug == "") errors.slug = "Please Enter Slug";
  if (icon == "") errors.icon = "Please Enter Fontawesome Icon";
  if (status.toString() == "") errors.status = "Please Select Status";

  if (errors.title || errors.slug || errors.status || errors.icon) {
    errors.success = false;
    return res.json(errors);
  } else {
    const categoryData = new categoryModel(body);
    categoryData.save((e, data) => {
      if (e) {
        errors.success = false;
        errors.message = "Some Error occured while saving the data";
        errors.error = e
        return res.json(errors);
      } else {
        errors.success = true;
        errors.message = "Category Added";
        return res.json(errors);
      }
    });
  }
};

// All Category
controller.allCategory = (req, res) => {
  categoryModel.find({}, (error, result) => {
    if (error) {
      res.status(200).json({
        success: false,
        error: error,
        message: "Oops Error! While Fetchning The data",
      });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  });
};

// Update Caegory
controller.updateCategory = (req, res) => {
  const body = req.body;
  const { _id, title, slug, status, icon } = body;
  const errors = {
    title: "",
    slug: "",
    status: "",
    icon:"",
    success: true,
    message: "",
  };

  if (title == "") errors.title = "Title is required";
  if (slug == "") errors.slug = "Slug is required";
  if (icon == "") errors.icon = "Icon is required";
  if (status.toString() == "") errors.status = "Status is required";

  if (errors.title || errors.slug || errors.status || errors.icon) {
    errors.success = false;
    return res.json(errors);
  }
  categoryModel.findByIdAndUpdate({ _id }, body, (error, result) => {
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


// Delete Caegory
controller.deleteCategory = (req, res) => {
  const body = req.body;
  const { _id} = body;
  const errors = {
    _id: "",
    success: true,
    message: "",
  };

  if (_id == "") errors.name = "ID is required";

  if (errors._id) {
    errors.success = false;
    return res.json(errors);
  }
  categoryModel.findByIdAndDelete({ _id }, body, (error, result) => {
    if (!error) {
      errors.data = result;
      errors.message = "Deleted Successfully !!";
      return res.json(errors);
    } else {
      errors.success = false;
      errors.error = error;
      errors.message = "Error occured while Deleting the data";
      return res.json(errors);
    }
  });
};


// Pending Listing
controller.pendingBusiness = (req, res)=>{
  businessModel.find({ status: false }, (error, result) => {
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
  businessModel.find({ status: true }, (error, result) => {
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

// Get Business Accouring to Slug
controller.getBusinessAcdSlug = (req, res)=>{
  const slug = req.params.slug
  businessModel.findOne({ slug: slug }, (error, result) => {
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

// Update Business
controller.updateBusiness = (req, res) => {
  const body = req.body;
  if(body.status == 'true'){
    body.status = true
  }else if(body.status == 'false'){
    body.status = false
  }
  console.log(body)
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
    pinCode,
    status
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
    status: '',
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
  if (status.toString() == "") errors.status = "Please Select Status";

  if (errors.title || errors.slug || errors.category || errors.mobile || errors.description || errors.email || errors.address || errors.state || errors.city || errors.pinCode || errors.status) {
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

module.exports = controller;
