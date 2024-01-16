const mongoose = require('mongoose')
const { Schema } = mongoose

const clientsSchema = new Schema({

    numberDoc: { type: String, unique: true },
    nameClient: { type: String },
    address1: { type: String, default: null },
    address2: { type: String, default: null },
    district: { type: String },
    reference: { type: String },
    phone1: { type: String, default: null },
    phone2: { type: String, default: null },
    email1: { type: String, default: null },
    email2: { type: String, default: null },
    observation: { type: String, default: null },
    codeDoc: { type: String },
    status: { type: Boolean }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.clientsModel = mongoose.model('clients', clientsSchema, 'clients')