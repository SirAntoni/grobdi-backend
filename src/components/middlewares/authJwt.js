const jwt = require('jsonwebtoken');
const { usersModel, rolesModel } = require('../users/model')
const SECRET_KEY = process.env.SECRET_KEY
async function verifyToken(req, res, next) {

    try {
        const token = req.headers['x-access-token']
        if (!token) return res.status(403).json({
            message: "No token provided"
        })

        const decoded = jwt.verify(token, SECRET_KEY)
        req.userId = decoded.id

        const user = await usersModel.findById(req.userId, { password: 0 })

        if (!user) return res.status(404).json({ message: "User not found" })

        next()
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function isAdmin(req, res, next) {

    try {
        const user = await usersModel.findById(req.userId)
        const roles = await rolesModel.find({ _id: { $in: user.roles } })
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
                next()
                return
            }
        }

        return res.status(403).json({ message: "Required admin role" })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


module.exports = {
    verifyToken,
    isAdmin
}