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
          expect(res.body.status).to.equals("success");
          expect(res.body.message).to.equals("Welcome To VAItrade API");
        });
    });
  })

  describe('Test complexity controller', () => {
    it("Return the lexical density of the inputted text", () => {
      chai
        .request(server)
        .post("/complexity")
        .send({input: "Kim loves going to the cinema"})
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.eql({ overall_ld: 0.67 });
        });
    });


    it("Return the lexical density of the text broken down into sentences", () => {
      chai
        .request(server)
        .post("/complexity?mode=verbose")
        .send({input: "Kim loves going to the cinema. I love it too"})
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.keys(['sentence_ld', 'overall_ld']);
          expect(res.body.data.sentence_ld).to.be.an('array');

        });
    });

  })
})
