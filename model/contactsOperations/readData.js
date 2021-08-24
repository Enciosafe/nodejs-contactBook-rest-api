const fs = require('fs/promises')
const filepath = require('./filepath')

const readData = async () => {
  try {
    const data = await fs.readFile(filepath)
    return JSON.parse(data)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = readData
