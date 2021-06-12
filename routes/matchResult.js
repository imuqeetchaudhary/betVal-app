const express = require("express")
const router = express.Router()
const matchResult = require("../controllers/matchResult")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addMatchResultSchema, getMatchResultSchema } = require("../validation/matchResult")

router.post("/get", authentication, validation(getMatchResultSchema), matchResult.getMatchResult)
router.post("/add", authentication, validation(addMatchResultSchema), matchResult.addMatchResult)

module.exports = router