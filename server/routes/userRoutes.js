const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const requireLogin = require("../middlewares/requireLogin")

router.get("/allCategory", requireLogin, userController.allCategory)
router.get("/userProfile", requireLogin, userController.userProfile)
router.put("/updateUser", requireLogin, userController.updateUser)

router.get("/allCategoryForWeb", userController.allCategoryForWeb)
router.post("/addBusiness", requireLogin, userController.addBusiness)
router.get("/pendingBusiness", requireLogin, userController.pendingBusiness)
router.get("/publishedBusiness", requireLogin, userController.publishedBusiness)

router.get("/allBusinessForWeb", userController.allBusinessForWeb)
router.get("/getBusinessAcdSlugForWeb/:slug", userController.getBusinessAcdSlugForWeb)
router.get("/getBusinessForWebAcdCategory/:slug", userController.getBusinessForWebAcdCategory)
router.get("/searchQueryForWeb/:query/:catQuery", userController.searchQueryForWeb)
router.get("/getBusinessAcdSlug/:slug", requireLogin, userController.getBusinessAcdSlug)
router.put("/updateBusiness", requireLogin, userController.updateBusiness)
router.delete("/deleteBusiness", requireLogin, userController.deleteBusiness)
router.post("/addComment", requireLogin, userController.addComment)
router.get("/getCommentsForWebAcdBusiness/:business", userController.getCommentsForWebAcdBusiness)
router.delete("/deleteComment", requireLogin, userController.deleteComment)
router.get("/submitedComment", requireLogin, userController.submitedComment)

module.exports = router