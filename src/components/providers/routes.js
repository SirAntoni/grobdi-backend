const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getProviders)
router.get('/:ruc', controller.getProviderByRuc)
router.post('/', [verifyToken, isAdmin], controller.createProvider)
router.put('/:ruc', [verifyToken, isAdmin], controller.updateProvider)
router.delete('/:ruc', [verifyToken, isAdmin], controller.softDeleteProvider)

module.exports = router