const { Contact } = require('./../../model')

const addContact = async (req, res, next) => {
  try {
    const newContact = { ...req.body, owner: req.user._id }
    const contact = await Contact.create(newContact)
    res.status(201).json({ contact })
  } catch (e) {
    next(e)
  }
}

module.exports = addContact
