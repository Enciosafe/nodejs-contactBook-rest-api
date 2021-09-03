const express = require('express')
const router = express.Router()
const { validationSignUpSignIn } = require('../../middlewares/validation')
const { controllerWrapper } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

router.post('/users/signup', validationSignUpSignIn, controllerWrapper(ctrl.signUp))
router.post('/users/login', validationSignUpSignIn, controllerWrapper(ctrl.login))
// router.get('/users/loguot', controllerWrapper(ctrl.logout))

module.exports = router
