const express = require('express')
const router = express.Router()
const { verifyToken, isAdmin } = require('../middlewares')
const controller = require('./controller')

router.get('/', controller.getCategories)
router.get('/:id', controller.getCategoryById)
router.post('/', [verifyToken, isAdmin], controller.createCategory)
router.put('/:id', [verifyToken, isAdmin], controller.updateCategory)
router.delete('/:id', [verifyToken, isAdmin], controller.softDeleteCategory)

module.exports = router