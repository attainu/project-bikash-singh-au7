const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")
const adminRequireLogin = require("../middlewares/adminRequireLogin")

const adminAuthController = require("../controllers/adminAuthController")
// Admin Authentication
router.post("/signup", adminAuthController.signup)
router.post("/login", adminAuthController.login)


router.get("/allUsers", adminRequireLogin, adminController.allUsers)
router.get("/adminProfile", adminRequireLogin, adminController.adminProfile)
router.put("/updateAdmin", adminRequireLogin, adminController.updateAdmin)
router.put("/updateUser", adminRequireLogin, adminController.updateUser)
router.post("/addCategory", adminRequireLogin, adminController.addCategory)
router.get("/allCategory", adminRequireLogin, adminController.allCategory)
router.put("/updateCategory", adminRequireLogin, adminController.updateCategory)
router.delete("/deleteCategory", adminRequireLogin, adminController.deleteCategory)


router.get("/pendingBusiness", adminRequireLogin, adminController.pendingBusiness)
router.get("/publishedBusiness", adminRequireLogin, adminController.publishedBusiness)
router.put("/updateBusiness", adminRequireLogin, adminController.updateBusiness)
router.delete("/deleteBusiness", adminRequireLogin, adminController.deleteBusiness)
module.exports = router