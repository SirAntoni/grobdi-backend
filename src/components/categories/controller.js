const categoriesDao = require('./dao')

async function getCategories(req, res) {
    try {

        const data = await categoriesDao.getCategories({ status: true })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function getCategoryById(req, res) {
    try {

        const { id } = req.params

        const data = await categoriesDao.getCategoryById({ _id: id })

        return res.json(data)

    } catch (err) {
        throw new Error(err)
    }
}

async function createCategory(req, res) {
    try {

        const create = await categoriesDao.createCategory(req.body)
        return res.status(201).json(create)

    } catch (err) {
        throw new Error(err)
    }
}

async function updateCategory(req, res) {
    try {
        const { id } = req.params
        const body = req.body
        const update = await categoriesDao.updateCategory({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid category" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

async function softDeleteCategory(req, res) {
    try {
        const { id } = req.params
        const body = { status: false }
        const update = await categoriesDao.updateCategory({ _id: id, body })
        if (!update) return res.status(400).json({ status: false, message: "Invalid category" })
        return res.status(200).json({ status: true, message: "success" })
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    softDeleteCategory
}