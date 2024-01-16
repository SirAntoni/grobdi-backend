const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getClients)
router.get('/:numberDoc', controller.getClientByNumberDoc)
router.post('/', [verifyToken, isAdmin], controller.createClient)
router.put('/:numberDoc', [verifyToken, isAdmin], controller.updateClient)
router.delete('/:numberDoc', [verifyToken, isAdmin], controller.softDeleteClient)

module.exports = router