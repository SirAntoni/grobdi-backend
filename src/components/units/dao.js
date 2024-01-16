const { unitsModel } = require('./model')

async function getUnits(data) {
    const units = await unitsModel.find(data).lean()
    return units
}

async function getUnitById(data) {

    const { _id } = data
    const unit = await unitsModel.findOne({ _id, status: true }).lean()

    return unit
}

async function createUnit(data) {

    const create = new unitsModel(data)

    const response = await create.save()

    return response

}

async function updateUnit(data) {

    const { _id, body } = data

    const update = await unitsModel.findByIdAndUpdate(_id, body)

    return update

}

module.exports = {
    getUnits,
    getUnitById,
    createUnit,
    updateUnit
}