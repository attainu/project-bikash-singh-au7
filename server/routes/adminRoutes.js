const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")
const adminRequireLogin = require("../middlewares/adminRequireLogin")

const adminAuthController = require("../controllers/adminAuthController")
// Admin Authentication
router.post("/signup", adminAuthController.signup)
router.post("/login", adminAuthController.login)


router.get("/allUsers", adminRequireLogin, adminController.allUsers)
router.put("/updateUser", adminController.updateUser)
router.post("/addCategory", adminController.addCategory)
router.get("/allCategory", adminController.allCategory)
router.put("/updateCategory", adminController.updateCategory)
router.delete("/deleteCategory", adminController.deleteCategory)

module.exports = router