const mongoose = require('mongoose')
const { Schema } = mongoose

const providersSchema = new Schema({

    ruc: { type: String, unique: true },
    nameProvider: { type: String },
    address: { type: String, default: null },
    email: { type: String, default: null },
    emailCpe: { type: String, default: null },
    phone1: { type: String, default: null },
    phone2: { type: String, default: null },
    contact: { type: String, default: null },
    observation: { type: String, default: null },
    status: { type: Boolean, default: true }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.providersModel = mongoose.model('providers', providersSchema, 'providers')