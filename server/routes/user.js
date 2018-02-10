const User = require('../models/user')

const postUser = (req, res) => {
  const newUser = new User(req.body)

  newUser.save((err) => {
    if (err) {
      if (err.code === 11000) {
        res.json({ success: false, message: 'User existant!' })
      } else {
        res.send(err)
      }
    } else {
      res.send({ message: 'Nouvel utilisateur ajouté', newUser })
    }
  })
}

const getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) return res.send(err)
    return res.json(users)
  })
}

const getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    res.json(user)
  })
}

const deleteUser = (req, res) => {
  User.remove({ _id: req.params.id }, (err, result) => {
    res.json({ message: 'Utilisateur supprimé avec succès!', result })
  })
}

module.exports = {
  postUser, getUsers, getUser, deleteUser,
}

