const mongoose = require('mongoose')
const { Schema } = mongoose

const presentationsSchema = new Schema({

    name: { type: String, required: true },
    status: { type: Boolean, default: true }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.presentationsModel = mongoose.model('presentations', presentationsSchema, 'presentations')