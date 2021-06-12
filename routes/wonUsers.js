const express = require("express")
const router = express.Router()
const wonUsers = require("../controllers/wonUsers")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { wonUserSchema } = require("../validation/wonUser")


router.get("/", authentication, validation(wonUserSchema), wonUsers.getWonUsers)
router.get("/get", authentication, validation(wonUserSchema), wonUsers.checkBetStatus)

module.exports = router