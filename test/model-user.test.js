/* eslint-env mocha */
const { expect } = require('chai')
const User = require('../server/models/user')

describe('CREATE USER', () => {
  const user = new User()

  user.name = 'Nedjim'
  user.pseudo = 'Nedj'
  user.password = 'passwdtest'

  it('Should be created with 3 arguments: name, pseudo, password', () => {
    const newUser = new User()

    expect(newUser).to.have.property('name')
    expect(newUser).to.have.property('pseudo')
    expect(newUser).to.have.property('password')
  })

  it('Propertie name should be a string and required', () => {
    expect(user.name).to.be.a('string')
  })
  it('Propertie pseudo should be a string', () => {
    expect(user.pseudo).to.be.a('string')
  })
  it('Propertie password should be a string', () => {
    expect(user.password).to.be.a('string')
  })
})
