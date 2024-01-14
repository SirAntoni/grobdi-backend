const mongoose = require('mongoose')
const { Schema } = mongoose

const clientesSchema = new Schema({
    nombre: { type: String },
    apellido: { type: String }
})

module.exports.clientesModel = mongoose.model('clientes', clientesSchema, 'clientes')