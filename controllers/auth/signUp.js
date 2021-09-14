const bcrypt = require('bcryptjs')
const { Conflict } = require('http-errors')
const { User } = require('./../../model')
const path = require('path')
const fs = require('fs/promises')
const gravatar = require('gravatar');

const usersDir = path.join(__dirname, '../../', 'public/avatars')

const signUp = async(req, res, _) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const result = await User.create({ email, password: hashPassword, subscription, avatarURL: gravatar.url(email) })
  const dirPath = path.join(usersDir, result._id.toString())
  await fs.mkdir(dirPath)
  res.status(201).json({
    status: 'created',
    code: 201,
    message: 'Created successfully ',
    data: { result }
  })
}

module.exports = signUp
