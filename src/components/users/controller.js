const usersDao = require('./dao')
const jwt = require('jsonwebtoken')
const { usersModel } = require('./model')

const SECRET_KEY = process.env.SECRET_KEY

async function signin(req, res) {
    try {

        const { email, password } = req.body

        const userFound = await usersDao.userFound({ email })

        const matchPassword = await usersModel.comparePassword(password, userFound.password)

        if (!matchPassword) return res.status(401).json({ token: null, message: "Invalid password" })

        const token = jwt.sign({ id: userFound._id }, SECRET_KEY, { expiresIn: 10000 })

        return res.json({ token })

    } catch (err) {
        throw new Error(err)
    }
}

async function signup(req, res) {
    try {

        const signup = await usersDao.signup(req.body)

        const token = jwt.sign({ id: signup._id }, SECRET_KEY, { expiresIn: 100 })

        return res.json(token)

    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    signin,
    signup
}