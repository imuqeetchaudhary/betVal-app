const { UserBalance } = require("../db/models/userBalance")

exports.getBalance = async (req, res) => {
    try {
        const userBalance = await UserBalance.findOne({ userId: req.body.userId })
        if (!userBalance) return res.status(404).json({
            message: "User balance not found"
        })

        res.status(200).json({
            balance: userBalance
        })
    }
    catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

exports.addBalance = async (req, res) => {
    const newBalance = new UserBalance({
        ...req.body
    })
    try {
        if(req.user.isAdmin == true) {
            const userBalance = await UserBalance.findOne({ userId: req.body.userId })
            if (!userBalance) {
                const addBalance = await newBalance.save()
                res.status(200).json({
                    message: `Successfully added balance for userId: ${req.body.userId}`,
                    userBalance: addBalance
                })
            }
            else {
                const userBalance = await UserBalance.updateOne(
                    { userId: req.body.userId },
                    { $set: { ...req.body } }
                )
                res.status(200).json({
                    message: `Successfully updated balance for userId: ${req.body.userId}`
                })
            }
        }
        else {
            res.status(401).json({
                message: "Only admin can add and update balance"
            })
        }

    }
    catch (err) {
        res.status(400).json({
            message: err
        })
    }
}