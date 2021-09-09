const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const contactsRouter = require('./routes/api/contacts')
const authRouter = require('./routes/api/auth')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(cors())
app.use(logger(formatsLogger))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/contacts', contactsRouter)
app.use('/api/auth', authRouter)

app.use((req, res) => {
  res.status(404).json({ status: 'fail', code: 404, message: 'Not found!!' })
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res
    .status(status)
    .json({ status: 'fail', code: status, message: err.message })
})

module.exports = app
