const { usersModel, roles } = require('../users/model')
async function checkRolesExisted(req, res, next) {
    if (req.body.roles) {

        for (let i = 0; i < req.body.roles.length; i++) {
            if (!roles.includes(req.body.roles[i])) {
                return res.status(400).json({ message: `Role ${req.body.roles[i]} does not exists` })
            }
        }

        next()

    }
}

async function checkDuplicateUsernameOrEmail(req, res, next) {

    const user = await usersModel.findOne({ username: req.body.username })
    if (user) return res.status(400).json({ message: 'Username already exists' })

    const email = await usersModel.findOne({ email: req.body.email })
    if (email) return res.status(400).json({ message: 'Email already exists' })

    next()
}
module.exports = {
    checkRolesExisted,
    checkDuplicateUsernameOrEmail
}