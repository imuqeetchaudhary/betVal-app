const mongoose = require("mongoose")
const schema = mongoose.Schema

const matchResultSchema = new schema({
    matchId: {
        type: schema.Types.ObjectId,
        require: true
    },
    isHomeTeamWon: {
        type: Boolean,
        default: false
    },
    isAwayTeamWon: {
        type: Boolean,
        default: false
    },
    isDraw: {
        type: Boolean,
        default: false
    },
    isBtts: {
        type: Boolean,
        default: false
    },
    isOver25: {
        type: Boolean,
        default: false
    }
})

exports.MatchResult = mongoose.model("MatchResult", matchResultSchema)