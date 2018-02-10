/* eslint-env mocha */
/* eslint dot-notation: ["error", { "allowPattern": '_id' }] */

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

describe('USERS', () => {
  const Request = {
    getUsers: request.get('/users'),
    postUser: request.post('/users').send({ name: 'Mimimi', pseudo: 'Mimimi', password: 'testpwd' }),
    getUser: request.get(`/user/${this.UserId}`),
    deleteUser: request.delete(`/user/${this.UserId}`),
  }

  describe('/users', () => {
    it('GET Should get all the books', async () => {
      const res = await Request.getUsers
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.be.a('array')
    })

    it('POST Should add a single user', async () => {
      const res = await Request.postUser
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.be.a('object')
      expect(res.body.message).to.eql('Nouvel utilisateur ajouté')
      expect(res.body.newUser).to.be.a('object')
      expect(res.body.newUser).to.include.keys('_id')
      expect(res.body.newUser).to.include.keys('name')
      expect(res.body.newUser.name).to.eql('Mimimi')
      expect(res.body.newUser).to.include.keys('pseudo')
      expect(res.body.newUser.pseudo).to.eql('Mimimi')
      expect(res.body.newUser).to.include.keys('password')
      Request.UserId = res.body.newUser['_id']
    })
  })

  describe('/user', () => {
    it('GET should return a user by the given the id', async () => {
      const res = await Request.getUser
      expect(res.statusCode).to.equal(200)
    })

    it('DELETE should delete a user by given the id', async () => {
      const res = await Request.deleteUser
      expect(res.statusCode).to.equal(200)
    })
  })
})
