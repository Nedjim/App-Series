/* eslint-env mocha */
const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server/server.js')

chai.use(chaiHttp)
const request = chai.request(app)

describe('HOME', () => {
  const Request = {
    get: request.get('/'),
  }
  it('GET should return status 200', async () => {
    const result = await Request.get
    expect(result.statusCode).to.equal(200)
  })
})

describe('REGISTER', () => {
  const Request = {
    input: { name: 'Nedjim', pseudo: 'Jijiim', password: 'admin' },
    post: request.post('/register').send(this.input),
  }

  it('POST should return status 200', async () => {
    const result = await Request.post
    expect(result.statusCode).to.equal(200)
  })

  it('POST should contain correct input', async () => {
    const result = await Request.post
    expect(result).to.be.a('object')
  })
})
