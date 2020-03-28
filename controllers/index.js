//const { handleComplexity, handleComplexityVerbose} = require('../services/complexity')
const {countWords} = require('../utils/utils')
const {lexicalDestiny, complexityVerbose} = require('../services/complexity')
module.exports = {
  getIndex(req, res, next) {
    res.send({status: 'success', message: 'Welcome To VAItrade API'})
  },

  postComplexity(req, res, next) {
    const { text } = req.body
    if(text == '' || text == undefined) {
      return res.status(400).send({ message: 'Input should not be empty!' })
    } else if(wordsInText(text) > 100 || text.length > 1000) {
      return res.status(400).send({ message: 'Input should not have upto 100 words or upto 1000 characters' })
    }
    if(req.query.mode == 'verbose') {
      complexityVerbose(text)
        .then(values => {
          res.send({
            "data": {
              sentence_ld: values,
              overall_ld: lexicalDestiny(text)
            }
          })
        })

    } else {
      res.send({"data": {overall_ld: lexicalDestiny(text)}})
    }

  }
}
