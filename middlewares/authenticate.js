const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
require('dotenv').config()
const { SECRET_KEY } = process.env
const { User } = require('../model')

const authenticate = async (req, _, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer') {
      throw new Unauthorized()
    }
    const { id } = jwt.verify(token, SECRET_KEY)
    console.log(id)

    const user = await User.findOne({ token })
    if (!user) {
      throw new Unauthorized()
    }
    req.user = user
    next()
  } catch (e) {
    throw new Unauthorized(e.message)
  }
}

module.exports = authenticate
