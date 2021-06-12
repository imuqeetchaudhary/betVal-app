const express = require("express")
const router = express.Router()
const userBalance = require("../controllers/userBalance")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { userBalanceSchema } = require("../validation/userBalance")

router.get("/", authentication, userBalance.getBalance)
router.post("/add", authentication, validation(userBalanceSchema), userBalance.addBalance)

module.exports = router