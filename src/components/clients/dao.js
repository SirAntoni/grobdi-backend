const { clientsModel } = require('./model')

async function getClients(data) {
    const clients = await clientsModel.find(data).lean()
    return clients
}

async function getClient(data) {

    const client = await clientsModel.findOne(data).lean()

    return client
}

async function createClient(data) {

    const create = new clientsModel(data)

    const response = await create.save()

    return response

}

async function updateClient(data) {

    const { numberDoc, body } = data

    const update = await clientsModel.updateOne({ numberDoc }, body)

    return update

}

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,

}