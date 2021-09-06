const { Contact } = require('./../../model')

const getList = async (req, res, next) => {
  try {
    const result = await Contact.find({ owner: req.user._id }).populate('owner', '_id email')
    res.json({ result })
  } catch (e) {
    next(e)
  }
}

module.exports = getList
