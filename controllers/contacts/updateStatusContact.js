const { Contact } = require('./../../model')

const updateStatusContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
    if (!req.body) {
      return res.json({ code: 400, message: 'missing field favorite' })
    }
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 400, message: 'not found' })
  } catch (e) {
    next(e)
  }
}

module.exports = updateStatusContact
