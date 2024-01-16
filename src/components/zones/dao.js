const { zonesModel } = require('./model')

async function getZones(data) {
    const zones = await zonesModel.find(data).lean()
    return zones
}

async function getZoneById(data) {

    const { _id } = data
    console.log(_id)
    const client = await zonesModel.findOne({ _id, status: true }).lean()

    return client
}

async function createZone(data) {

    const create = new zonesModel(data)

    const response = await create.save()

    return response

}

async function updateZone(data) {

    const { _id, body } = data

    const update = await zonesModel.findByIdAndUpdate(_id, body)

    return update

}

module.exports = {
    getZones,
    getZoneById,
    createZone,
    updateZone
}