const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

// router.post('/signin', (req, res) => {
//   res.status(200)
// })

module.exports = router
