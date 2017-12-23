/* eslint-env mocha */
const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../server/index.js')

describe('Pages status', () => {
  it('HOME', () => {
    chai.request(app)
      .get('/')
      .then((res) => {
        const value = 200
        expect(res).to.have.status(value)
      })
  })
})
