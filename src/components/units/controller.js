const unitsDao = require('./dao')

async function getUnits(req, res) {
    try {

        const data = await unitsDao.getUnits({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getUnitById(req, res) {
    try {

        const { id } = req.params

        const data = await unitsDao.getUnitById({ _id: id })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createUnit(req, res) {
    try {

        const create = await unitsDao.createUnit(req.body)
        return res.status(201).json(create)

    } catch (err) {
        throw new Error(err)
    }
}

async function updateUnit(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const update = await unitsDao.updateUnit({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid unit" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteUnit(req, res) {
    try {
        const { id } = req.params
        const body = { status: false }
        const update = await unitsDao.updateUnit({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid unit" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getUnits,
    getUnitById,
    createUnit,
    updateUnit,
    softDeleteUnit
}