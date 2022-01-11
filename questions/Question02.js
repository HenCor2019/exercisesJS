const sumOfDigits = (acc, current) => acc + Number(current)

const functionName = (number) => {
  if (!(number && typeof number === 'number')) return false

  const newNumber = number.toString().split('').reduce(sumOfDigits, 0)
  if (newNumber === 1) return true

  return newNumber < 10 ? false : functionName(newNumber)
}

// Question: What does this code do?

/* 
 a) Find the sum of the digits of the number
 b) Verify that the number is a prime number
 c) Check if it's a magic number
 d) Check if the  number is greater than 10
*/


module.exports = magic
