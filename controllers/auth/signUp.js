const bcrypt = require('bcryptjs')
const { Conflict } = require('http-errors')
const { User } = require('./../../model')

const signUp = async(req, res, _) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  await User.create({ email, password: hashPassword, subscription })
  res.status(201).json({
    status: 'created',
    code: 201,
    message: 'Created successfully '
  })
}

module.exports = signUp
