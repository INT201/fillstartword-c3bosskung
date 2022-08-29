const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  return `${startWord}${word}`
}
module.exports = fillStartWord
