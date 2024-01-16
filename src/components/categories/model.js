const mongoose = require('mongoose')
const { Schema } = mongoose

const categoriesSchema = new Schema({

    name: { type: String, required: true },
    status: { type: Boolean, default: true }

}, {
    timestamps: true,
    versionKey: false
})

module.exports.categoriesModel = mongoose.model('categories', categoriesSchema, 'categories')