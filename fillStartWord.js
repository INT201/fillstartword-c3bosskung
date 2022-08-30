const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (startWord === null || word === null || startWord === undefined || word === undefined) {
    return undefined;
  } else if (word.startsWith(startWord)) {
    return `${startWord}${word.replace(startWord, "")}`
  } else {
    return `${startWord}${word}`
  }
}

module.exports = fillStartWord
