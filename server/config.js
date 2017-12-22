const dotenv = require('dotenv').config();

module.exports = {
    'port': process.env.PORT || 8080,
    'api_key': process.env.API_KEY
}