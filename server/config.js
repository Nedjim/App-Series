require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8080,
  api_key: process.env.API_KEY,
  db_host: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds135817.mlab.com:35817/app-series`,
}
