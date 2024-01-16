const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getLabs)
router.get('/:id', controller.getLabById)
router.post('/', [verifyToken, isAdmin], controller.createLab)
router.put('/:id', [verifyToken, isAdmin], controller.updateLab)
router.delete('/:id', [verifyToken, isAdmin], controller.softDeleteLab)

module.exports = router