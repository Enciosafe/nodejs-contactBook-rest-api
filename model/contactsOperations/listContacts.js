const readData = require('./readData')

const listContacts = async () => {
  try {
    return await readData()
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = listContacts
