const mongoose = require('mongoose')
const { Schema } = mongoose

const unitsSchema = new Schema({

    name: { type: String, required: true },
    status: { type: Boolean, default: true }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.unitsModel = mongoose.model('units', unitsSchema, 'units')