/* eslint-env mocha */
const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server/')

chai.use(chaiHttp)
const request = chai.request(app)

describe('/GET home', () => {
  const Request = {
    get: request.get('/'),
  }
  it('Should return status 200', async () => {
    const res = await Request.get
    expect(res.statusCode).to.equal(200)
  })
})

// describe('/POST register', () => {
//   const Request = {
//     input: { name: 'Nedjim', pseudo: 'Jijiim', password: 'admin' },
//     post: request.post('/register').send(this.input),
//   }

// it('Should add a new user', async () => {
//   const res = await Request.post
//   expect(res.statusCode).to.equal(200)
//   expect(res.body).to.be.a('object')
//   expect(res.body).to.include.keys('message')
//   expect(res.body.message).to.equal('Nouvel utilisateur ajouté')
// })
// })
