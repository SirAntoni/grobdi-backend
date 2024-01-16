const mongoose = require('mongoose')
const { Schema } = mongoose

const zonesSchema = new Schema({

    name: { type: String, required: true },
    visitor: { type: String, required: true },
    observation: { type: String },
    status: { type: Boolean, default: true }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.zonesModel = mongoose.model('zones', zonesSchema, 'zones')