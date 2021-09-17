const sendMail = require('../../utils/sendMail')
const { BadRequest } = require('http-errors')
const { User } = require('../../model')

const verifyMore = async (req, res) => {
  const { email } = req.body
  if (!email) {
    throw new BadRequest('missing required field email')
  }
  const user = await User.findOne({ email })
  if (user.verify) {
    res.status(400).json({
      status: 'Bad Request',
      code: 400,
      message: 'Verification has already been passed',
    })
  }
  const data = {
    to: email,
    subject: 'Повторное подтверждение регистрации',
    html: `<a href='http://localhost:3000/api/auth/users/verify/${user.verifyToken}'>Подтвердите регистрацию</a>`
  }
  await sendMail(data)
  res.status(400).json({
    status: 'Success',
    message: 'Verification email send',
  })
}

module.exports = verifyMore
