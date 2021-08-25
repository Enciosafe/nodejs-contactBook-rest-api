const contactsOperations = require('./../../model/contactsOperations')

const getList = async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts()
    res.json({ status: 'success', code: 200, data: { result } })
  } catch (e) {
    next(e)
  }
}

module.exports = getList
