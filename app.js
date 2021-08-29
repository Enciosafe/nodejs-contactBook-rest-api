const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const contactsRouter = require('./routes/api/contacts')
const mongoose = require('mongoose')

require('dotenv').config()
const { DB_HOST } = process.env

console.log(process.env.DB_HOST)

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(error => console.log(error.message))

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(cors())
app.use(logger(formatsLogger))
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ status: 'fail', code: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res
    .status(status)
    .json({ status: 'fail', code: status, message: err.message })
})

module.exports = app
