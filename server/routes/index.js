const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/register', (req, res) => {
  res.json(req.body)
})

module.exports = router
