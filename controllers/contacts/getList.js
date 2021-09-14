const { Contact } = require('./../../model')

const getList = async (req, res, next) => {
  try {
    const { page, limit } = req.query
    const skip = (page - 1) * limit
    const pages = await Contact.find({})
    const result = await Contact.find({ owner: req.user._id }, '', { skip, limit: +limit }).populate('owner', '_id email')
    res.json({
      status: 'success',
      code: 200,
      data: {
        total: pages.length,
        pages: Math.ceil(pages.length / limit),
        result
      }
    })
  } catch (e) {
    next(e)
  }
}

module.exports = getList
