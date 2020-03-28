const chai = require('chai')
const chaiHttp = require('chai-http')
const { server } = require('../app')
const expect = chai.expect

chai.use(chaiHttp)

describe('API test', () => {
  describe('Test index controller', () => {
    it("welcomes user to the api", () => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success")
          expect(res.body.message).to.equals("Welcome To VAItrade API")
        })
    })
  })

  describe('Test complexity controller', () => {
    it("Returns error message for empty input", () => {
      chai
        .request(server)
        .post("/complexity")
        .send({'text': ''})
        .end((err, res) => {
          expect(res).to.have.status(400)
          expect(res.body).to.be.an('object')
          expect(res.body.message).to.eql("Input should not be empty!");
        })
    })

     it("Returns error message for input with more than 100 words", () => {
      let text = `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing.
      `
      chai
        .request(server)
        .post("/complexity")
        .send({'text': text})
        .end((err, res) => {
          expect(res).to.have.status(400)
          expect(res.body).to.be.an('object')
          expect(res.body.message).to.eql("Input should not have upto 100 words or upto 1000 characters")
        })
    })

    it("Returns error message for input with more than 1000 characters", () => {
      let text = `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing.
      `
      chai
        .request(server)
        .post("/complexity")
        .send({'text': text})
        .end((err, res) => {
          expect(res).to.have.status(400)
          expect(res.body).to.be.an('object')
          expect(res.body.message).to.eql("Input should not have upto 100 words or upto 1000 characters")
        })
    })


    it("Returns the lexical density of the input text", () => {
      chai
        .request(server)
        .post("/complexity")
        .send({'text': "Kim loves going to the cinema"})
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.data).to.be.an('object')
          expect(res.body.data).to.eql({ overall_ld: 0.67 });
        })
    })


    it("Returns the lexical density of the text broken down into sentences", () => {
      chai
        .request(server)
        .post("/complexity?mode=verbose")
        .send({'text': "Kim loves going to the cinema. I love it too"})
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.data).to.be.an('object')
          expect(res.body.data).to.have.keys(['sentence_ld', 'overall_ld']);
          expect(res.body.data.sentence_ld).to.be.an('array');

        })
    })

  })
})
