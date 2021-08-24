const readData = require('./readData')
const filepath = require('./filepath')
const fs = require('fs/promises')

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
    await fs.writeFile((filepath), JSON.stringify(data))
    return record
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = addContact
