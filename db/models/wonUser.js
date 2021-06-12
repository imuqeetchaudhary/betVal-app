const mongoose = require("mongoose")
const schema = mongoose.Schema

const wonUserSchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        require: true
    },
    matchId: {
        type: schema.Types.ObjectId,
        require: true
    },
    betReturn: {
        type: Number,
        default: 0.00
    }
})

exports.WonUser = mongoose.model("WonUser", wonUserSchema)