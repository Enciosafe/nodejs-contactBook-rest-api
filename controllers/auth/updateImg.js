const fs = require('fs/promises')
const path = require('path')
const { User } = require('../../model')
const { Unauthorized } = require('http-errors')
const Jimp = require('jimp')

const usersDir = path.join(__dirname, '../../', 'public/avatars')

const updateImg = async(req, res) => {
  const id = req.user.id
  const { path: tempPath } = req.file
  const uploadPath = path.join(usersDir, `${id}.jpg`)
  try {
    await fs.rename(tempPath, uploadPath)
    const image = `/public/avatars/${id}.jpg`
    const user = await User.findOneAndUpdate({ _id: req.user.id }, { avatarURL: `/public/avatars/${id}.jpg` })
    if (!user) {
      throw new Unauthorized()
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        avatarURL: image
      }
    })
  } catch (e) {
    await fs.unlink(tempPath)
    throw e
  }
}

module.exports = updateImg
