const { User } = require('../../model')
const { Unauthorized } = require('http-errors')

const current = async (req, res, _) => {
  const id = req.user.id
  const user = await User.findById(id)
  if (!user) {
    throw new Unauthorized()
  }
  const { email, subscription } = user
  res.json({
    status: 'success',
    code: 200,
    data: {
      email: email,
      subscription: subscription
    }
  })
}

module.exports = current
