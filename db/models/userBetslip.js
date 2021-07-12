const mongoose = require("mongoose")
const schema = mongoose.Schema

const userBetslipSchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        require: true
    },
    matchId: {
        type: schema.Types.ObjectId,
        require: true
    },
    homeOdd: {
        type: Number,
        default: 0.00
    },
    drawOdd: {
        type: Number,
        default: 0.00
    },
    awayOdd: {
        type: Number,
        default: 0.00
    },
    bttsYes: {
        type: Number,
        default: 0.00
    },
    bttsNo: {
        type: Number,
        default: 0.00
    },
    over25: {
        type: Number,
        default: 0.00
    },
    under25: {
        type: Number,
        default: 0.00
    },
    totalOdds: {
        type: Number,
        default: 0.00
    },
    stake: {
        type: Number,
        default: 0.00
    },
    isBetWon: {
        type: Boolean
    },
    betReturn: {
        type: Number
    }
})

exports.UserBetslip = mongoose.model("UserBetslip", userBetslipSchema)