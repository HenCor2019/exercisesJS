const isLessThan = (current, value) => current < value
const isCloser = (difference, lastDifference) => difference == 0 ? false : difference < lastDifference

const findMoreLarger = (sequences = [], selectedValue) => {
  const larger = { difference: 1000, value: -1 }

if (!(sequences.length !== 0 && selectedValue)) return larger


  for (const number of sequences) {
    if (!isLessThan(number, selectedValue) && isCloser(number - selectedValue, larger.difference)) {
      //1
      //2
    }
  }

  return larger
}

// Complete the code

/*
a) 
  1. larger.value = number - selectedValue
  2. larger.difference = number
b) 
  1. larger.value = number
  2. larger.difference = number - selectedValue
c) 
  1. larger.difference = number
  2. larger.value = number - selectedValue
d) 
  1. larger.difference = number - selectedValue
  2. larger.value = number
*/

module.exports = findMoreLarger
