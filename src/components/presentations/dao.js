const { presentationsModel } = require('./model')

async function getPresentations(data) {
    const presentations = await presentationsModel.find(data).lean()
    return presentations
}

async function getPresentationById(data) {

    const { _id } = data
    const client = await presentationsModel.findOne({ _id, status: true }).lean()

    return client
}

async function createPresentation(data) {

    const create = new presentationsModel(data)

    const response = await create.save()

    return response

}

async function updatePresentation(data) {

    const { _id, body } = data

    const update = await presentationsModel.findByIdAndUpdate(_id, body)

    return update

}

module.exports = {
    getPresentations,
    getPresentationById,
    createPresentation,
    updatePresentation
}