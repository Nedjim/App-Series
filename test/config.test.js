/* eslint-env mocha */
/* eslint-disable */
const { expect } = require('chai')
require('dotenv').config()

describe('DOT ENV', () => {
  const dotenv = {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
  }

  it('Should have PORT 3000', () => {
    expect(dotenv.PORT).to.exist
    expect(dotenv.PORT).to.equal('3000')
  })
  it('Should have API KEY', () => {
    expect(dotenv.API_KEY).to.exist
  })
  it('Should have DB_USER', () => {
    expect(dotenv.DB_USER).to.exist
  })
  it('Should have DB_PASSWORD', () => {
    expect(dotenv.DB_PASSWORD).to.exist
  })
})

