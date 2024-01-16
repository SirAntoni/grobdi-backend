const clientsDao = require('./dao')

async function getClients(req, res) {
    try {

        const data = await clientsDao.getClients({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getClientByNumberDoc(req, res) {
    try {

        const { numberDoc } = req.params

        const data = await clientsDao.getClient({ numberDoc })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createClient(req, res) {
    try {

        const { numberDoc } = req.body
        const clientFound = await clientsDao.getClient({ numberDoc })
        if (clientFound) return res.status(400).json({ status: false, message: "Number document exists" })
        const create = await clientsDao.createClient(req.body)
        return res.status(201).json(create)

    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

async function updateClient(req, res) {
    try {
        const { numberDoc } = req.params
        const _numberDoc = req.body.numberDoc
        if (_numberDoc) {
            const clientFound = await clientsDao.getClient({ numberDoc: _numberDoc })
            if (clientFound) return res.status(400).json({ status: false, message: "Number document exists" })
        }
        const body = req.body
        const update = await clientsDao.updateClient({ numberDoc, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid client" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteClient(req, res) {
    try {

        const { numberDoc } = req.params
        const body = { status: false }
        const update = await clientsDao.updateClient({ numberDoc, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid client" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getClients,
    getClientByNumberDoc,
    createClient,
    updateClient,
    softDeleteClient
}