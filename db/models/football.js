const mongoose = require("mongoose")
const schema = mongoose.Schema

const footballSchema = new schema({
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    homeTeam: {
        type: String,
        require: true
    },
    awayTeam: {
        type: String,
        require: true
    },
    homeOdd: {
        type: Number,
        require: true
    },
    drawOdd: {
        type: Number,
        require: true
    },
    awayOdd: {
        type: Number,
        require: true
    },
    bttsYes: {
        type: Number,
        require: true
    },
    bttsNo: {
        type: Number,
        require: true
    },
    over25: {
        type: Number,
        require: true
    },
    under25: {
        type: Number,
        require: true
    }
})

exports.Football = mongoose.model("Football", footballSchema)