const bcrypt = require('bcryptjs')
const { User } = require('./../../model')
const { BadRequest } = require('http-errors')
const jwt = require('jsonwebtoken')

const login = async (req, res, __) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new BadRequest('Wrong email')
  }
  const hashPassword = user.password
  const compareResult = bcrypt.compareSync(password, hashPassword)
  if (!compareResult) {
    throw new BadRequest('Wrong password')
  }

  const payload = {
    id: user._id
  }

  const { SECRET_KEY } = process.env
  const token = jwt.sign(payload, SECRET_KEY)
  await User.findByIdAndUpdate(user._id, { token })
  res.json({
    token
  })
}

module.exports = login
