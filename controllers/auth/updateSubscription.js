const { User } = require('../../model')

const updateSubscription = async (req, res, _) => {
  const id = req.user.id
  const result = await User.updateOne({ id }, { subscription: req.body.subscription })
  if (!result) {
    return res.json({ code: 400, message: 'missing field subscription' })
  }
  return result
    ? res.json({ status: 'success', code: 200, message: `subscription changed on ${req.body.subscription}` })
    : res.json({ status: 'error', code: 400, message: 'not found' })
}

module.exports = updateSubscription
