const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/', (req, res) => {
  const user = new User()
  user.name = req.body.name
  user.pseudo = req.body.pseudo
  user.password = req.body.password
  res.json({
    message: 'Nouvel utilisateur ajouté',
  })
})

module.exports = router
