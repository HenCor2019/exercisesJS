/* eslint-disable */

const countVowels = require('./countVowels')

test('Empty sentence or sentence is not a string type', () => {
  const response = countVowels(5)
  expect(response).toBe(-1)
})

test('Count of vowels in "Hi, can you say me your name?" to be 10', () => {
  const response = countVowels('HI, can you say me your name?')
  expect(response).toBe(10)
})

test('Count of vowels in "This sentence only have 9 vowels" to be 9', () => {
  const response = countVowels('This sentence only have 9 vowels')
  expect(response).toBe(9)
})
