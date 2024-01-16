const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getUnits)
router.get('/:id', controller.getUnitById)
router.post('/', [verifyToken, isAdmin], controller.createUnit)
router.put('/:id', [verifyToken, isAdmin], controller.updateUnit)
router.delete('/:id', [verifyToken, isAdmin], controller.softDeleteUnit)

module.exports = router