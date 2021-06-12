const yup = require("yup")

exports.wonUserSchema = yup.object({
    matchId: yup.string().required()
})