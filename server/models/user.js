/* eslint func-names: ["error", "never"] */
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10

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

UserSchema.pre('save', function (next) {
  const user = this

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) next(err)
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) next(error)
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)
