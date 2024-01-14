const { clientesModel } = require('./model')

async function obtener_clientes() {
    const clientes = await clientesModel.find({}).lean()

    return clientes
}

module.exports = {
    obtener_clientes
}