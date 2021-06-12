const { User } = require("../db/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const env = require("dotenv").config()

exports.profile =  async(req, res) => {
    try {
        const user = await User.findOne({email: req.user.email})
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

exports.register = async (req, res) => {
    try {
        const emailExists = await User.findOne({ email: req.body.email })
        if(emailExists) return res.status(400).json({
            message: "Email Exists!"
        })

        const hash = bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        const saveUser = await newUser.save()
        res.status(200).json({
            message: "Successfully register a new user",
            user: newUser
        })

    }
    catch (err) {
        res.status(404).json({
            message: err
        })

    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(404).json({
            message: "User don't exists"
        })

        const matchedPassword = await bcrypt.compareSync(req.body.password, user.password)
        if (!matchedPassword) return res.status(401).json({
            message: "Invalid Credentials"
        })

        const token = await jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        }, process.env.ACCESS_TOKEN_SECRET)

        res.status(200).json({
            token: token,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    catch (err) {
        res.status(404).json({
            message: err
        })
    }
}