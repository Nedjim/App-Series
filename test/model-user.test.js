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