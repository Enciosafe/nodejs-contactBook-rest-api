const { Schema, model } = require('mongoose')

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegexp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact']
  },
  email: {
    type: String,
    match: emailRegexp
  },
  phone: {
    type: String,
    match: phoneRegexp
  },
  favorite: {
    type: Boolean,
    default: false
  }
})

const Contact = model('contact', contactSchema)

module.exports = Contact
