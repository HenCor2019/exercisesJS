const secondDuplicated = (elements = []) => {
  if (!(typeof elements === 'object' && elements?.length)) return -1

  const uniqueElements = []
  const duplicatedElements = []

  for (const element of elements) {
    if (uniqueElements.findIndex(e => e === element) !== -1) {
      // 1
      continue
    }

    // 2
  }

  return duplicatedElements.length > 1 ? duplicatedElements[1] : -1
}


// Funcion que se encarga de retornar el segundo duplicado en una funcion
// [1,2,3,3,4,5,6,6] -> 6

/*
a)
  1. uniqueElements.push(element)
  2. duplicatedElements.push(element)
a)
  1. duplicatedElements.push(element)
  2. uniqueElements.push(element)
a)
  1. duplicatedElements.filter(element => element === element)
  2. uniqueElements.filter(element => element === element)
a)
  1. uniqueElements.filter(element => element === element)
  2. duplicatedElements.filter(element => element === element)
*/

module.exports = secondDuplicated
