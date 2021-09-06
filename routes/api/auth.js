const express = require('express')
const router = express.Router()
const { validationSignUpSignIn } = require('../../middlewares/validation')
const { controllerWrapper, authenticate } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

router.post('/users/signup', validationSignUpSignIn, controllerWrapper(ctrl.signUp))
router.post('/users/login', validationSignUpSignIn, controllerWrapper(ctrl.login))
router.get('/users/logout', controllerWrapper(authenticate), controllerWrapper(ctrl.logout))
router.get('/users/current', controllerWrapper(authenticate), controllerWrapper(ctrl.current))
router.patch('/users', controllerWrapper(authenticate), controllerWrapper(ctrl.updateSubscription))

module.exports = router
