const { User } = require('../../model')
const { Unauthorized } = require('http-errors')

const current = async (req, res, _) => {
  const id = req.user.id
  const user = await User.findById(id)
  if (!user) {
    throw new Unauthorized()
  }
  const { email, subscription, avatarURL } = user
  res.json({
    status: 'success',
    code: 200,
    data: {
      id: id,
      email: email,
      subscription: subscription,
      avatarURL: avatarURL,
    }
  })
}

module.exports = current
