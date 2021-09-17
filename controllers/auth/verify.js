const { NotFound } = require('http-errors')
const { User } = require('../../model')

const verify = async (req, res) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verificationToken })
  if (!user.verifyToken) {
    throw new NotFound('User not found')
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  res.send('<h2>Email Verified!! Congrats</h2>')
}

module.exports = verify
