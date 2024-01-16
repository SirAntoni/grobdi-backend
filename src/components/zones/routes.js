const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getZones)
router.get('/:id', controller.getZoneById)
router.post('/', [verifyToken, isAdmin], controller.createZone)
router.put('/:id', [verifyToken, isAdmin], controller.updateZone)
router.delete('/:id', [verifyToken, isAdmin], controller.softDeleteZone)

module.exports = router