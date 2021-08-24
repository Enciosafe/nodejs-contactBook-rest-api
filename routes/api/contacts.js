const express = require('express')
const router = express.Router()
const Contacts = require('../../model')
const { validationCreateContact, validationUpdateContact } = require('./validation')

router.get('/', async (req, res, next) => {
  try {
    const result = await Contacts.listContacts()
    res.json({ status: 'success', code: 200, data: { result } })
  } catch (e) {
    next(e)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contacts.getContactById(req.params.contactId)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
})

router.post('/', validationCreateContact, async (req, res, next) => {
  try {
    const contact = await Contacts.addContact(req.body)
    res
      .status(201)
      .json({ status: 'success', code: 201, data: { contact } })
  } catch (e) {
    next(e)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contacts.removeContact(req.params.contactId)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
})

router.patch('/:contactId', validationUpdateContact, async (req, res, next) => {
  try {
    const contact = await Contacts.updateContact(req.params.contactId, req.body)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
})

module.exports = router
