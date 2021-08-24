const readData = require('./readData')
const filepath = require('./filepath')
const fs = require('fs/promises')

const removeContact = async (contactId) => {
  try {
    const data = await readData()
    const index = data.findIndex(item => item.id === +contactId)
    if (index === -1) {
      console.log(new Error(`Product with id=${contactId} not found`))
    }
    const newContacts = data.filter(item => item.id !== +contactId)
    await fs.writeFile((filepath), JSON.stringify(newContacts))
    return data[index]
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = removeContact
