const contactsOperations = require('../../model/contactsOperations')

const deleteContact = async (req, res, next) => {
  try {
    const contact = await contactsOperations.removeContact(req.params.contactId)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
}

module.exports = deleteContact
