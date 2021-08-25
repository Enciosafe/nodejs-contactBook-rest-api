const contactsOperations = require('../../model/contactsOperations')

const updateContact = async (req, res, next) => {
  try {
    const contact = await contactsOperations.updateContact(req.params.contactId, req.body)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
}

module.exports = updateContact
