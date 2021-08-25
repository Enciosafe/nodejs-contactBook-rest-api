const contactsOperations = require('../../model/contactsOperations')

const addContact = async (req, res, next) => {
  try {
    const contact = await contactsOperations.addContact(req.body)
    res
      .status(201)
      .json({ status: 'success', code: 201, data: { contact } })
  } catch (e) {
    next(e)
  }
}

module.exports = addContact
