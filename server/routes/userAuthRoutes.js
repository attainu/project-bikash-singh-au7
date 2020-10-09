const exress = require("express")
const router = exress.Router()
const authContoller = require("../controllers/userAuthController")
const requireLogin = require("../middlewares/requireLogin")

router.post('/signup', authContoller.signup)
router.post('/login', authContoller.login)
router.get("/", requireLogin, (req, res)=>{
    console.log(req.user)
    res.json({message: req.user})
})

module.exports = router