const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config.js')
require('./models/db_connexion').connect(config.db_host)

const homeRoute = require('./routes/home')
const user = require('./routes/user')

const app = express()

app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', homeRoute)

app.route('/users')
  .get(user.getUsers)
  .post(user.postUser)

app.route('/user/delete/:id')
  .post(user.deleteUser)

app.route('/user/:id')
  .get(user.getUser)

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`The application is running on localhost:${config.port}`)
})

module.exports = app

