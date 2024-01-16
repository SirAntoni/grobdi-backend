const express = require('express');
const router = express.Router()
const clients = require('../components/clients/routes')
const users = require('../components/users/routes')
const labs = require('../components/labs/routes')
const providers = require('../components/providers/routes')
const zones = require('../components/zones/routes')
const categories = require('../components/categories/routes')
const presentations = require('../components/presentations/routes')
const units = require('../components/units/routes')


router.use("/clients", clients)
router.use("/auth", users)
router.use("/labs", labs)
router.use("/providers", providers)
router.use("/zones", zones)
router.use("/categories", categories)
router.use("/presentations", presentations)
router.use("/units", units)



module.exports = router