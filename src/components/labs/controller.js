const labsDao = require('./dao')

async function getLabs(req, res) {
    try {

        const data = await labsDao.getLabs({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getLabById(req, res) {
    try {

        const { id } = req.params

        const data = await labsDao.getLabById({ _id: id })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createLab(req, res) {
    try {

        const create = await labsDao.createLab(req.body)
        return res.status(201).json(create)

    } catch (err) {
        throw new Error(err)
    }
}

async function updateLab(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const update = await labsDao.updateLab({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid lab" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteLab(req, res) {
    try {
        const { id } = req.params
        const body = { status: false }
        const update = await labsDao.updateLab({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid lab" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getLabs,
    getLabById,
    createLab,
    updateLab,
    softDeleteLab
}