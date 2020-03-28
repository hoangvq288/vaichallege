
formatNumber = (number) => {
  return +number.toFixed(2)
}

responseInfo = (numberNonLexical, lengthInput) => {
  let lexicalDestiny = (lengthInput - numberNonLexical)/lengthInput
  return {
    "data": {
      overall_ld: formatNumber(lexicalDestiny)
    }
  }
}


module.exports = { responseInfo }
