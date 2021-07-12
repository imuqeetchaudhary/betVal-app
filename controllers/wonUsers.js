const { UserBetslip } = require("../db/models/userBetslip")
const { MatchResult } = require("../db/models/matchResult")
const { WonUser } = require("../db/models/wonUser")

exports.getWonUsers = async (req, res) => {
    try {

        async function updateBetslip() {
            const updateBetslip = await UserBetslip.updateOne(
                { matchId: req.body.matchId },
                {
                    $set: {
                        isBetWon: true
                    }
                })
            console.log("Updated Betslip");
        }

        const matchResult = await MatchResult.findOne({ matchId: req.body.matchId })
        if (!matchResult) return res.status(404).json({
            message: "No match result found"
        })

        if (matchResult.isHomeTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === true) {

            const betslip = await UserBetslip.find({ matchId: req.body.matchId, homeOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }

        else if (matchResult.isHomeTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, homeOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, under25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isHomeTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === true) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, homeOdd: { $gte: 0.1 }, bttsNo: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isHomeTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, homeOdd: { $gte: 0.1 }, bttsNo: { $gte: 0.1 }, under25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }

        // 

        else if (matchResult.isAwayTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === true) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, awayOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isAwayTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, awayOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, under25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isAwayTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === true) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, awayOdd: { $gte: 0.1 }, bttNo: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isAwayTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, awayOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, under25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }

        // 

        else if (matchResult.isDraw == true && matchResult.isBtts == true && matchResult.isOver25 === true) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, drawOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isDraw == true && matchResult.isBtts == true && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, drawOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, under25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isDraw == true && matchResult.isBtts == false && matchResult.isOver25 === true) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, drawOdd: { $gte: 0.1 }, bttsNo: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }
        else if (matchResult.isDraw == true && matchResult.isBtts == false && matchResult.isOver25 === false) {
            const betslip = await UserBetslip.find({ matchId: req.body.matchId, drawOdd: { $gte: 0.1 }, bttsYes: { $gte: 0.1 }, over25: { $gte: 0.1 } })
            if (!betslip) return res.status(404).json({ message: "Not Found" })

            for (let i = 0; i < betslip.length; i++) {
                const wonUser = await WonUser.findOne({ userId: betslip[i].userId, matchId: req.body.matchId })
                if (!wonUser) {

                    const newWonUser = new WonUser({
                        userId: betslip[i].userId,
                        matchId: req.body.matchId,
                        betReturn: betslip[i].stake * betslip[i].totalOdds
                    })

                    await newWonUser.save()

                    updateBetslip()

                }
                else {
                    console.log("Already Saved");
                }
            }
            const wonUser = await WonUser.find().populate("userId")
            res.json({ wonUser })
        }

        else {
            res.status(200).json({
                message: "You lost the bet",
                betReturn: 0.00
            })
        }

    }
    catch (err) {
        res.status(400).send({
            message: `${err}`
        })
    }
}

exports.checkBetStatus = async (req, res) => {
    try {
        const wonUser = await WonUser.findOne({ userId: req.user._id, matchId: req.body.matchId })
        if (!wonUser) return res.status(200).json({
            message: "You lost the bet",
            betReturn: 0.00
        })

        res.status(200).json({ wonUser })
    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}