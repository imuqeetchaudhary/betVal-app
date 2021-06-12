const yup = require("yup")

exports.userBetslipSchema = yup.object({
    matchId: yup.string().required(),
    homeOdd: yup.number().required(),
    drawOdd: yup.number().required(),
    awayOdd: yup.number().required(),
    bttsYes: yup.number().required(),
    bttsNo: yup.number().required(),
    over25: yup.number().required(),
    under25: yup.number().required(),
    stake: yup.number().required()
})