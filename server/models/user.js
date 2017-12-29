const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  pseudo: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
})

UserSchema.pre('save', (next) => {
  const user = this
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      next(err)
    } else {
      user.password = hash
      next()
    }
  })
})

module.exports = mongoose.model('User', UserSchema)
