const { UserBetslip } = require("../db/models/userBetslip")

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
        const body = req.body

        const userBetslip = await UserBetslip.findOne({matchId: body.matchId})
        if(userBetslip) return res.status(400).json({
            message: "You have already added bet for this match"
        })

        const totalOdds = (parseFloat(body.homeOdd) + parseFloat(body.drawOdd) + parseFloat(body.awayOdd) + parseFloat(body.bttsYes) + parseFloat(body.bttsNo) + parseFloat(body.over25) + parseFloat(body.under25))

        const newUserBetslip = await new UserBetslip({
            ...body,
            userId: req.user._id,
            totalOdds: totalOdds
        })

        await newUserBetslip.save()
        res.status(200).json({
            message: "Successfully added bet in User Betslip for this match",
            userBetslip: newUserBetslip
        })
    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}