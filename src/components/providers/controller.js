const providersDao = require('./dao')

async function getProviders(req, res) {
    try {

        const data = await providersDao.getProviders({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getProviderByRuc(req, res) {
    try {

        const { ruc } = req.params

        const data = await providersDao.getProvider({ ruc })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createProvider(req, res) {
    try {

        const { ruc } = req.body
        const providerFound = await providersDao.getProvider({ ruc })
        if (providerFound) return res.status(400).json({ status: false, message: "Provider exists" })
        const create = await providersDao.createProvider(req.body)
        return res.status(201).json(create)

    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

async function updateProvider(req, res) {
    try {
        const { ruc } = req.params
        const _ruc = req.body.ruc
        if (_ruc) {
            const providerFound = await providersDao.getProvider({ ruc: _ruc })
            if (providerFound) return res.status(400).json({ status: false, message: "Provider exists" })
        }
        const body = req.body
        const update = await providersDao.updateProvider({ ruc, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid provider" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteProvider(req, res) {
    try {

        const { ruc } = req.params
        const body = { status: false }
        const update = await providersDao.updateProvider({ ruc, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid provider" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getProviders,
    getProviderByRuc,
    createProvider,
    updateProvider,
    softDeleteProvider
}