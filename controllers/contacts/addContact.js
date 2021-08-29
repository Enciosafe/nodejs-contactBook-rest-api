const { Contact } = require('./../../model')

const addContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body)
    res.status(201).json({ contact })
  } catch (e) {
    next(e)
  }
}

module.exports = addContact
