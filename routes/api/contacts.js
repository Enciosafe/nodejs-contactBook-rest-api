const express = require('express')
const router = express.Router()
const { validationCreateContact, validationUpdateContact } = require('./validation')
const ctrl = require('../../controllers/contacts')

router.get('/', ctrl.getList)

router.get('/:contactId', ctrl.getById)

router.post('/', validationCreateContact, ctrl.addContact)

router.delete('/:contactId', ctrl.deleteContact)

router.patch('/:contactId', validationUpdateContact, ctrl.updateContact)

module.exports = router
