const mongoose = require("mongoose")

// exports.connection = mongoose.connect("mongodb://localhost:27017/betVal", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

exports.connection = mongoose.connect("mongodb+srv://muqeet_chaudhary:Abdul6890060@cluster0.bqu75.mongodb.net/tour-guide-appDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})