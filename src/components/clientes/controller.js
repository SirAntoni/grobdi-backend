const clientesDao = require('./dao')

async function listar_clientes(req, res) {
    try {

        const data = await clientesDao.obtener_clientes()

        return res.send(data)

    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    listar_clientes
}