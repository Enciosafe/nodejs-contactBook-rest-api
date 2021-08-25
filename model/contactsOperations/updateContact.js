const readData = require('./readData')
const filepath = require('./filepath')
const fs = require('fs/promises')

const updateContact = async (contactId, body) => {
  try {
    const data = await readData()
    const [result] = data.filter((contact) => contact.id === +contactId)
    if (result) {
      Object.assign(result, body)
      await fs.writeFile(filepath, JSON.stringify(data))
    }
    return result
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = updateContact
