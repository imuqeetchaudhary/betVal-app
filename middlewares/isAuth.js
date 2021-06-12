const env = require("dotenv").config()
const jwt = require("jsonwebtoken")

exports.authentication = async (req, res, next) => {
    try {
        const authHeader = await req.headers["authorization"]
        const token = await authHeader && authHeader.split(" ")[1]

        if(token === null ) return res.status(401).json({
            message: "Token not found"
        })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(401).json({
                message: "Auth Failed! Invalid Token"
            })
            
            else {
                req.user = user
                next()
            }
        })
    }
    catch (err) {
        res.status(401).json({
            message: "Token not found"
        })
    }
    
}