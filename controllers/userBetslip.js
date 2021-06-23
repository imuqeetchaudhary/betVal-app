const { UserBetslip } = require("../db/models/userBetslip")
const { UserBalance } = require("../db/models/userBalance")

exports.getUserBetslip = async (req, res) => {
    try {
        const userBetslip = await UserBetslip.find({ userId: req.user._id })
        if (!userBetslip) return res.status(404).json({
            message: "No betslip found"
        })

        res.status(200).json({
            betslips: userBetslip
        })
    }
    catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

exports.addUserBetslip = async (req, res) => {
    try {
        const userBalance = await UserBalance.findOne({ userId: req.user._id })
        console.log(userBalance)
        if (userBalance.normalBalance >= req.body.stake && userBalance.freeBetBalance >= req.body.stake) {
            const body = req.body

            const userBetslip = await UserBetslip.findOne({ matchId: body.matchId })
            if (userBetslip) return res.status(400).json({
                message: "You have already added bet for this match"
            })

            const totalOdds = (parseFloat(body.homeOdd) + parseFloat(body.drawOdd) + parseFloat(body.awayOdd) + parseFloat(body.bttsYes) + parseFloat(body.bttsNo) + parseFloat(body.over25) + parseFloat(body.under25))

            const newUserBetslip = await new UserBetslip({
                ...body,
                userId: req.user._id,
                totalOdds: totalOdds
            })

            if (req.body.freeBetBalance > 0) {
                await UserBalance.updateOne(
                    { userId: req.user._id },
                    {
                        $set: {
                            freeBetBalance: userBalance.freeBetBalance - req.body.stake
                        }
                    })
                await newUserBetslip.save()
                res.status(200).json({
                    message: "Successfully added bet in User Betslip for this match",
                    userBetslip: newUserBetslip
                })
            }
            else if (req.body.normalBalance > 0) {
                await UserBalance.updateOne(
                    { userId: req.user._id },
                    {
                        $set: {
                            normalBalance: userBalance.normalBalance - req.body.stake
                        }
                    })
                await newUserBetslip.save()
                res.status(200).json({
                    message: "Successfully added bet in User Betslip for this match",
                    userBetslip: newUserBetslip
                })
            }
        }
        else {
            res.status(400).json({ message: "You don't have enought balance" })
        }
    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}

exports.deleteUserBetslip = async (req, res) => {
    try {
        const betslip = await UserBetslip.findOne({ _id: req.body.betslipId })
        if (!betslip) return res.status(404).json({
            message: "No betslip found"
        })
        else {
            await UserBetslip.deleteOne({ _id: req.body.betslipId })
            res.status(200).json({
                message: "Successfully deleted betslip"
            })
        }
    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}