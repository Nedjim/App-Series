/* eslint-env mocha */
const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server/')

chai.use(chaiHttp)
const request = chai.request(app)

describe('Home', () => {
  const Request = {
    get: request.get('/'),
  }

  it('/GET Should return status 200', async () => {
    const res = await Request.get
    expect(res.statusCode).to.equal(200)
  })
})

describe('Users', () => {
  const Request = {
    get: request.get('/users'),
    post: request.post('/users').send({ name: 'Name', pseudo: 'Pseudo', password: 'testpwd' }),
  }

  it('/GET Should get all the books', async () => {
    const res = await Request.get
    expect(res.statusCode).to.equal(200)
    expect(res.body).to.be.a('array')
  })

  it('/POST Should add a single user', async () => {
    const res = await Request.post
    expect(res.statusCode).to.equal(200)
    expect(res.body).to.be.a('object')
    expect(res.body.message).to.eql('Nouvel utilisateur ajouté')
    expect(res.body.newUser).to.be.a('object')
    expect(res.body.newUser).to.include.keys('_id')
    expect(res.body.newUser).to.include.keys('name')
    expect(res.body.newUser.name).to.eql('Name')
    expect(res.body.newUser).to.include.keys('pseudo')
    expect(res.body.newUser.pseudo).to.eql('Pseudo')
    expect(res.body.newUser).to.include.keys('password')
  })
})
