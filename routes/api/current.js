const express = require('express')
const router = express.Router()
const { controllerWrapper } = require('../../middlewares')
const ctrl = require('../../controllers/users')

router.get('/users/current', controllerWrapper(ctrl.getCurrent))

module.exports = router
