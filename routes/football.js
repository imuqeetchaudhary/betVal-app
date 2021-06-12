const express = require("express")
const router = express.Router()
const football = require("../controllers/football")
const multer = require("multer")
const path = require("path")
const { authentication } = require("../middlewares/isAuth")

const storage = multer.diskStorage({
    destination: "./upload/xlsxFiles",
    filename: (req, file, fileName) => {
        return fileName(null, `sheet${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== ".xlsx") return cb(new Error("Only .xlsx files are allowed"))
        cb(null, true)
    }
})

router.get("/matches", football.getMatches)
router.post("/upload", authentication, upload.single("file"), football.upload)

module.exports = router