const yup = require("yup")

exports.userBalanceSchema = yup.object({
    userId: yup.string().required(),
    normalBalance: yup.number().required(),
    freeBetBalance: yup.number().required()
})