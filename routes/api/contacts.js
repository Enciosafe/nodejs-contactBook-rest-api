const express = require('express')
const router = express.Router()
const { validationCreateContact, validationUpdateContact, validationUpdateFavoriteInContact } = require('../../middlewares/validation')
const { controllerWrapper, authenticate } = require('../../middlewares')
const ctrl = require('../../controllers/contacts')

router.get('/', controllerWrapper(authenticate), ctrl.getList)
router.get('/:contactId', ctrl.getById)
router.post('/', controllerWrapper(authenticate), validationCreateContact, ctrl.addContact)
router.delete('/:contactId', controllerWrapper(authenticate), ctrl.deleteContact)
router.patch('/:contactId', validationUpdateContact, ctrl.updateContact)
router.patch('/:contactId/favorite', validationUpdateFavoriteInContact, ctrl.updateStatusContact)


module.exports = router
