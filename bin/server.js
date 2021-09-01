const app = require('../app')
const mongoose = require('mongoose')

require('dotenv').config()
const { DB_HOST } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    console.log('Database connection successful')
  })
})
  .catch(() => process.exit(1))
const { PORT = 3000 } = process.env
