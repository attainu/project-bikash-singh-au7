const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")

router.get("/allUsers", adminController.allUsers)
router.put("/updateUser", adminController.updateUser)
router.post("/addCategory", adminController.addCategory)
router.get("/allCategory", adminController.allCategory)
router.put("/updateCategory", adminController.updateCategory)
router.delete("/deleteCategory", adminController.deleteCategory)

module.exports = router