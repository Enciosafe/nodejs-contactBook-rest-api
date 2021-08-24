const fs = require('fs/promises')
const path = require('path')

const readData = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'contacts.json'), 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.log(error.message)
  }
}

const listContacts = async () => {
  try {
    return await readData()
  } catch (error) {
    console.log(error.message)
  }
}

const getContactById = async (contactId) => {
  try {
    const data = await readData()
    return data.find(item => item.id === +contactId)
  } catch (error) {
    console.log(error.message)
  }
}

const removeContact = async (contactId) => {
  try {
    const data = await readData()
    const index = data.findIndex(item => item.id === +contactId)
    if (index === -1) {
      console.log(new Error(`Product with id=${contactId} not found`))
    }
    const newContacts = data.filter(item => item.id !== +contactId)
    await fs.writeFile(path.join(__dirname, 'contacts.json'), JSON.stringify(newContacts))
    return data[index]
  } catch (error) {
    console.log(error.message)
  }
}

const addContact = async (body) => {
  try {
    const data = await readData()
    const id = data.length + 1
    const record = {
      id,
      ...body,
      ...(body.phone ? {} : { phone: '000-000-000' }),
    }
    data.push(record)
    await fs.writeFile(path.join(__dirname, 'contacts.json'), JSON.stringify(data))
    return record
  } catch (error) {
    console.log(error.message)
  }
}

const updateContact = async (contactId, body) => {
  try {
    const data = await readData()
    const [result] = data.filter((contact) => contact.id === +contactId)
    if (result) {
      Object.assign(result, body)
      await fs.writeFile(path.join(__dirname, 'contacts.json'), JSON.stringify(data))
    }
    return result
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
