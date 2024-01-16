const zonesDao = require('./dao')

async function getZones(req, res) {
    try {

        const data = await zonesDao.getZones({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getZoneById(req, res) {
    try {

        const { id } = req.params

        const data = await zonesDao.getZoneById({ _id: id })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createZone(req, res) {
    try {

        const create = await zonesDao.createZone(req.body)
        return res.status(201).json(create)

    } catch (err) {
        throw new Error(err)
    }
}

async function updateZone(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const update = await zonesDao.updateZone({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid zone" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteZone(req, res) {
    try {
        const { id } = req.params
        const body = { status: false }
        const update = await zonesDao.updateZone({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid zone" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getZones,
    getZoneById,
    createZone,
    updateZone,
    softDeleteZone
}