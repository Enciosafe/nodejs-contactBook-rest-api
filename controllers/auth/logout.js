const { User } = require('../../model')

const logout = async (req, res, _) => {
  await User.findByIdAndUpdate(req.user._id, { token: null })
  res.json({
    status: 'success',
    code: 204,
    message: 'Success logout'
  })
}

module.exports = logout
