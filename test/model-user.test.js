/* eslint-env mocha */
/* eslint-disable */
const { expect } = require('chai')
const { sinon } = require('sinon')
const User = require('../server/models/user')

describe('MODELE USER', function() {
  const user = new User()

  it('Should be invalid if name is empty', function(done) {
      user.validate(function(err) {
          expect(err.errors.name).to.exist
          done()
      })
  })

  it('Should be invalid if pseudo is empty', function(done) {
    user.validate(function(err) {
        expect(err.errors.pseudo).to.exist
        done()
      })
  })

  it('Should be invalid if password is empty', function(done) {
    user.validate(function(err) {
        expect(err.errors.password).to.exist
        done()
    })
  })

})

// describe('MODELE USER', () => {
//   const user = new User()

//   user.name = 'Nedjim'
//   user.pseudo = 'Nedj'
//   user.password = 'passwdtest'

//   it('Should be created with 3 arguments: name, pseudo, password', () => {
//     const newUser = new User()

//     expect(newUser).to.have.property('name')
//     expect(newUser).to.have.property('pseudo')
//     expect(newUser).to.have.property('password')
//   })

//   it('Propertie name should be a string and required', () => {
//     expect(user.name).to.exist
//     expect(user.name).to.be.a('string')
//     user.validate((err) => {
//       expect(err.errors.name).to.exist
//       done()
//     })
//   })
//   it('Propertie pseudo should be a string and required', () => {
//     expect(user.name).to.exist
//     expect(user.pseudo).to.be.a('string')
//   })
//   it('Propertie password should be a string and required', () => {
//     expect(user.name).to.exist
//     expect(user.password).to.be.a('string')
//   })
// })
