const existInArray = (elements, element) => elements.findIndex(e => e === element) !== -1
const removeDuplicates = (elements = []) => {
  if (!(elements && elements.length)) return -1

  const elementsSet = new Set(elements)

  return [...elementsSet]
}

const removeDuplicates02 = (elements = []) => {
  if (!(elements && elements.length)) return -1

  const uniqueElements = []

  for (const element of elements) {
    if (!existInArray(uniqueElements, element)) {
      uniqueElements.push(element)
    }
  }

  return uniqueElements
}

// Complete the code

/*
  a) uniqueElements.pop(element)
  b) uniqueElements.filter(e => e === element)
  c) uniqueElements.remove(element)
  d) uniqueElements.push(element)
*/

module.exports = { removeDuplicates, removeDuplicates02 }
