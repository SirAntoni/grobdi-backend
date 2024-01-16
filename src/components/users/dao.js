const { usersModel, rolesModel } = require('./model')

async function signup(data) {
    const { username, email, password, roles } = data

    const newUser = new usersModel({
        username,
        email,
        password: await usersModel.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await rolesModel.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(roles => roles._id)
    } else {
        const role = await rolesModel.findOne({ name: "user" })
        console.log(role)
        newUser.roles = [role._id]
    }

    const saveUser = await newUser.save()

    return saveUser
}

async function userFound(data) {

    const userFound = await usersModel.findOne(data).populate("roles")
    return userFound
}



module.exports = {
    signup,
    userFound
}