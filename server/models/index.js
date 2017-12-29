const mongoose = require('mongoose')

module.exports.connect = (uri) => {
  mongoose.connect(uri)
  mongoose.Promise = global.Promise

  const db = mongoose.connection
  db.on('error', (err) => {
  // eslint-disable-next-line no-console
    console.log(`Mongoose connection error: ${err}`)
    process.exit(1)
  })
  db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Connection succes')
  })
  require('./user')
}
