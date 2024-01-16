const presentationsDao = require('./dao')

async function getPresentations(req, res) {
    try {

        const data = await presentationsDao.getPresentations({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getPresentationById(req, res) {
    try {

        const { id } = req.params

        const data = await presentationsDao.getPresentationById({ _id: id })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createPresentation(req, res) {
    try {

        const create = await presentationsDao.createPresentation(req.body)
        return res.status(201).json(create)

    } catch (err) {
        throw new Error(err)
    }
}

async function updatePresentation(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const update = await presentationsDao.updatePresentation({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid presentation" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeletePresentation(req, res) {
    try {
        const { id } = req.params
        const body = { status: false }
        const update = await presentationsDao.updatePresentation({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid presentation" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getPresentations,
    getPresentationById,
    createPresentation,
    updatePresentation,
    softDeletePresentation
}