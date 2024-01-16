const { categoriesModel } = require('./model')

async function getCategories(data) {
    const categories = await categoriesModel.find(data).lean()
    return categories
}

async function getCategoryById(data) {

    const { _id } = data
    const client = await categoriesModel.findOne({ _id, status: true }).lean()

    return client
}

async function createCategory(data) {

    const create = new categoriesModel(data)

    const response = await create.save()

    return response

}

async function updateCategory(data) {

    const { _id, body } = data

    const update = await categoriesModel.findByIdAndUpdate(_id, body)

    return update

}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory
}