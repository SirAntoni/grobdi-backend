const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getPresentations)
router.get('/:id', controller.getPresentationById)
router.post('/', [verifyToken, isAdmin], controller.createPresentation)
router.put('/:id', [verifyToken, isAdmin], controller.updatePresentation)
router.delete('/:id', [verifyToken, isAdmin], controller.softDeletePresentation)

module.exports = router