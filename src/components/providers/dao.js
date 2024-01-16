const { providersModel } = require('./model')

async function getProviders(data) {
    const providers = await providersModel.find(data).lean()
    return providers
}

async function getProvider(data) {

    const provider = await providersModel.findOne(data).lean()

    return provider
}

async function createProvider(data) {
    const create = new providersModel(data)

    const response = await create.save()
    return response

}

async function updateProvider(data) {

    const { ruc, body } = data

    const update = await providersModel.updateOne({ ruc }, body)

    return update

}

module.exports = {
    getProviders,
    getProvider,
    createProvider,
    updateProvider,

}