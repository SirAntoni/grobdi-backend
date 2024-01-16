const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const usersSchema = new Schema({

    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "roles",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false,
})

usersSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
usersSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports.usersModel = mongoose.model('users', usersSchema, 'users')

module.exports.roles = ["admin", "user"]

const rolesSchema = new Schema({
    name: { type: String },
}, {
    timestamps: true,
    versionKey: false,
})

module.exports.rolesModel = mongoose.model('roles', rolesSchema, 'roles')