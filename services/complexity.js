const NON_LEXICAL_WORDS = ['to', 'got', 'is', 'have', 'and', 'although',
'or', 'that', 'when', 'while', 'a', 'either', 'more', 'much', 'neither', 'my',
'that', 'the', 'as', 'no', 'nor', 'not', 'at', 'between', 'in', 'of', 'without',
'i', 'you', 'he', 'she', 'it', 'we', 'they', 'anybody', 'one']


const lexicalDestiny = (input) => {
  let words = input.split(' ')
  let lexicalWordsNumber = 0
  words.forEach(word => {
    if (!NON_LEXICAL_WORDS.includes(word.toLowerCase())) {
      lexicalWordsNumber += 1
    }
  })
  return +(lexicalWordsNumber / words.length).toFixed(2)
}

const complexityVerbose = async (text) => {
  let sentences = text.split(".")
  let data = await Promise.all(sentences.map(sentence => {
    return new Promise((resolve, reject) => {
      resolve(lexicalDestiny(sentence))
    })
  }))
  return data
}

module.exports = {
  lexicalDestiny,
  complexityVerbose
}
