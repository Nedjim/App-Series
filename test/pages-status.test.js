/* eslint-env mocha */
const chai = require('chai')

const chaiHttp = require('chai-http')

const { expect } = chai
const app = require('../server/server.js')

chai.use(chaiHttp)

describe('Home', () => {
  it('GET should return status 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err)
        const result = res.statusCode
        expect(result).to.equal(200)
        done()
      })
  })
})
