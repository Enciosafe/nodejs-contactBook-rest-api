const { Contact } = require('./../../model')

const getList = async (req, res, next) => {
  try {
    const result = await Contact.find()
    res.json({ result })
  } catch (e) {
    next(e)
  }
}

module.exports = getList
