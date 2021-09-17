const express = require('express')
const router = express.Router()
const { validationSignUpSignIn } = require('../../middlewares/validation')
const { controllerWrapper, authenticate, upload } = require('../../middlewares')
const ctrl = require('../../controllers/auth')

router.post('/users/signup', validationSignUpSignIn, controllerWrapper(ctrl.signUp))
router.post('/users/login', validationSignUpSignIn, controllerWrapper(ctrl.login))
router.post('/users/verify/', controllerWrapper(ctrl.verifyMore))
router.get('/users/logout', controllerWrapper(authenticate), controllerWrapper(ctrl.logout))
router.get('/users/current', controllerWrapper(authenticate), controllerWrapper(ctrl.current))
router.get('/users/verify/:verificationToken', controllerWrapper(ctrl.verify))
router.patch('/users', controllerWrapper(authenticate), controllerWrapper(ctrl.updateSubscription))
router.patch('/users/avatars', controllerWrapper(authenticate), upload.single('image'), controllerWrapper(ctrl.updateImg))

module.exports = router
