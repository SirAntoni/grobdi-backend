const { labsModel } = require('./model')

async function getLabs(data) {
    const labs = await labsModel.find(data).lean()
    return labs
}

async function getLabById(data) {

    const { _id } = data
    const client = await labsModel.findOne({ _id, status: true }).lean()

    return client
}

async function createLab(data) {

    const create = new labsModel(data)

    const response = await create.save()

    return response

}

async function updateLab(data) {

    const { _id, body } = data

    const update = await labsModel.findByIdAndUpdate(_id, body)

    return update

}

module.exports = {
    getLabs,
    getLabById,
    createLab,
    updateLab
}