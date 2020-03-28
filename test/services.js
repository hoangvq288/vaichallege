const expect = require('chai').expect
const { lexicalDestiny } = require('../services/complexity.js')
describe('#lexicalDestiny', () => {
  it('returns 0 if input = I', () => {
    const value = lexicalDestiny('i')
    expect(value).to.eql(0)
  })

  it('returns 0 if input = i', () => {
    const value = lexicalDestiny('I')
    expect(value).to.eql(0)
  })

  it('returns 0.25 if input = I have to go', () => {
    const value = lexicalDestiny('I have to go')
    expect(value).to.eql(0.25)
  })

  it('returns 0.25 if input = We have to go', () => {
    const value = lexicalDestiny('We have to go')
    expect(value).to.eql(0.25)
  })

  it('returns 0.67 if input = Kim loves going to the cinema', () => {
    const value = lexicalDestiny('Kim loves going to the cinema')
    expect(value).to.eql(0.67)
  })

})
