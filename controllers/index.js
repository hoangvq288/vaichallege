const { handleComplexity, handleComplexityVerbose} = require('../services/complexity')
module.exports = {
  getIndex(req, res, next) {
    res.send({status: 'success', message: 'Welcome To VAItrade API'})
  },

  postComplexity(req, res, next) {
    if(req.query.mode == 'verbose') {
      res.send({
        "data": {
          sentence_ld: [0.67, 1],
          overall_ld: 0.42
        }
      })
    } else {
      res.send({"data": {overall_ld: 0.67}})
    }

  }
}
