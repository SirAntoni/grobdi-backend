const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.listar_clientes)

module.exports = router