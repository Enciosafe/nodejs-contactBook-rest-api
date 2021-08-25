const readData = require('./readData')

const getContactById = async (contactId) => {
  try {
    const data = await readData()
    return data.find(item => item.id === +contactId)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getContactById
