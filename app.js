const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const football = require("./routes/football")
const userBalance = require("./routes/userBalance")
const userBetslip = require("./routes/userBetslip")
const matchResult = require("./routes/matchResult")
const wonUsers = require("./routes/wonUsers")
const cors = require("cors")
const https = require("https");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get("/", async (req, res) => {
    res.status(200).json({ message: "BetVal Web App" })
})

app.use("/user", user)
app.use("/football", football)
app.use("/user-balance", userBalance)
app.use("/user-betslip", userBetslip)
app.use("/match-result", matchResult)
app.use("/won-users", wonUsers)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Sever started at http://localhost:${port}`);
})