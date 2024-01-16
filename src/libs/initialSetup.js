const { rolesModel } = require('../components/users/model')

async function createRoles() {

    try {
        const count = await rolesModel.estimatedDocumentCount()

        if (count > 0) return;
        const values = await Promise.all([
            new rolesModel({ name: 'user' }).save(),
            new rolesModel({ name: 'admin' }).save()
        ])

        console.log(values)
    } catch (err) {
        console.error(err)
    }

}

module.exports = {
    createRoles
}