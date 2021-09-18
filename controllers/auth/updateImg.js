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
    const file = await Jimp.read(tempPath)
    await file.resize(250, 250).write(tempPath)
    await fs.rename(tempPath, uploadPath)
    const image = `/avatars/${id}.jpg`
    const user = await User.findOneAndUpdate({ _id: req.user.id }, { avatarURL: `/avatars/${id}.jpg` })
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
