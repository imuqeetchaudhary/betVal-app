const { MatchResult } = require("../db/models/matchResult")

exports.getMatchResult = async (req, res) => {
    try{
        const matchResult = await MatchResult.findOne({matchId: req.body.matchId})
        if(!matchResult) return res.status(404).json({
            message: "No match result found"
        })

        res.status(200).json({
            matchResult: matchResult
        })
    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}

exports.addMatchResult = async (req, res) => {
    try{
        if(req.user.isAdmin == true) {
            const matchResult = await MatchResult.findOne({ matchId: req.body.matchId })
            if (matchResult) return res.status(400).json({
                message: "Already added result for this match"
            })

            const newMatchResult = new MatchResult({
                ...req.body
            })

            await newMatchResult.save()
            res.status(200).json({
                message: "Successfully added match result"
            })
        }
        else {
            res.status(401).json({
                message: "Only admin can add match result"
            })
        }
    }
    catch (err) {
        res.status(404).json({
            message: `${err}`
        })
    }
}