const addContact = require('./addContact')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const listContacts = require('./listContacts')
const updateContact = require('./updateContact')
const readData = require('./readData')

module.exports = {
  listContacts,
  updateContact,
  removeContact,
  getContactById,
  addContact,
  readData
}
