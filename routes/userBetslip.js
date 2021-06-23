const express = require("express")
const router = express.Router()
const userBetslip = require("../controllers/userBetslip")
const { authentication } = require("../middlewares/isAuth")
const { userBetslipSchema, deleteBetslipSchema } = require("../validation/userBetslip")
const { validation } = require("../middlewares/validation") 

router.get("/get", authentication, userBetslip.getUserBetslip)
router.post("/add", authentication, validation(userBetslipSchema), userBetslip.addUserBetslip)
router.post("/delete", authentication, validation(deleteBetslipSchema), userBetslip.deleteUserBetslip)

module.exports = router