const mongoose = require("mongoose")
const schema = mongoose.Schema

const userBalanceSchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    normalBalance: {
        type: Number
    },
    freeBetBalance: {
        type: Number
    }
})

exports.UserBalance = mongoose.model("UserBalance", userBalanceSchema)