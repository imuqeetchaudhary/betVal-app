const yup = require("yup")

exports.addMatchResultSchema = yup.object({
    matchId: yup.string().required(),
    isHomeTeamWon: yup.boolean().required(),
    isAwayTeamWon: yup.boolean().required(),
    isDraw: yup.boolean().required(),
    isBtts: yup.boolean().required(),
    isOver25: yup.boolean().required()
})

exports.getMatchResultSchema = yup.object({
    matchId: yup.string().required(),
})