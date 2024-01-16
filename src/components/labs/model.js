const mongoose = require('mongoose')
const { Schema } = mongoose

const labsSchema = new Schema({

    ruc: { type: String, required: true },
    name: { type: String, required: true },
    contact: { type: String },
    status: { type: Boolean }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.labsModel = mongoose.model('labs', labsSchema, 'labs')