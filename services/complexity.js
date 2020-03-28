
const NON_LEXICAL_WORDS = ['to', 'the']


const handleComplexity = (text) => {
  let nonLexicalWordsNumber = 0
  let words = text.split(" ")
 // console.log(words)
  words.forEach(word => {
    if(NON_LEXICAL_WORDS.includes(word.toLowerCase())) {
      nonLexicalWordsNumber += 1
    }
  });
  let lexicalDestiny = (words.length - nonLexicalWordsNumber)/words.length
  return lexicalDestiny
}

const handleComplexityVerbose = async (text) => {
  let sentences = text.split(".")
  let data = await Promise.all(sentences.map(sentence => {
    return new Promise((resolve, reject) => {
      resolve(handleComplexity(sentence))
    })
  }))
  return data
}

module.exports = {
  handleComplexity,
  handleComplexityVerbose
}
