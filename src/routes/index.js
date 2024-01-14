const express = require('express');
const router = express.Router()
const clientes = require('../components/clientes/routes')
router.use("/clientes", clientes)
module.exports = router