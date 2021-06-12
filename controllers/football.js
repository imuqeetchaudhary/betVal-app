const { Football } = require("../db/models/football")
const xlsx = require("xlsx")
const multer = require("multer")
const path = require("path")

exports.upload = async (req, res) => {
    try {
        const workbook = await xlsx.readFile(`./upload/xlsxFiles/${req.file.filename}`)
        const workSheet = workbook.Sheets["Sheet1"]
        const data = xlsx.utils.sheet_to_json(workSheet)

        await Football.remove()

        Football.insertMany(data)
        .then(() => {
            res.status(200).json({
                message: "Football matches data successfully inserted"
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err
            })
        })
    }
    catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

exports.getMatches = async (req, res) => {
    try {
        const matches = await Football.find()
        if(!matches) return res.status(404).json({
            message: "No matches found"
        })

        res.status(200).json({
            list: matches
        })
    }
    catch (err) {
        res.status(400).json({
            message: err
        })
    }
}