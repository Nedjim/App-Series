const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.js')
const mainRoutes = require('./routes')

const app = express()

app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(mainRoutes)

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`The application is running on localhost:${config.port}`)
})

module.exports = app

