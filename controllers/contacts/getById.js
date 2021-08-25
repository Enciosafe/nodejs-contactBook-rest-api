const contactsOperations = require('../../model/contactsOperations');

const getById = async (req, res, next) => {
  try {
    const contact = await contactsOperations.getContactById(req.params.contactId)
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: 'Not found!' })
  } catch (e) {
    next(e)
  }
}

module.exports = getById
