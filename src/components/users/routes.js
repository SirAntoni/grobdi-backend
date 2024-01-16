const express = require('express')
const router = express.Router()
const { checkRolesExisted, checkDuplicateUsernameOrEmail } = require('../middlewares')
const controller = require('./controller')

router.post('/signin', controller.signin)
router.post('/signup', [checkDuplicateUsernameOrEmail, checkRolesExisted], controller.signup)

module.exports = router