const { Contact } = require('./../../model')

const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: `Not found id ${req.params.contactId} !` })
  } catch (e) {
    next(e)
  }
}

module.exports = updateContact
