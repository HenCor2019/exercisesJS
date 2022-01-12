/* eslint-disable */
const isAnagram = require('./anagram')

test('Empty sentences or sentences are not a string to be false', () => {
  const response = isAnagram()
  expect(response).toBe(false)
})

test('Anagram of hello and elolh to be true', () => {
  const response = isAnagram('hello', 'elolh')
  expect(response).toEqual(true)
})

test('Anagram of "Cheater" and "Teacher" to be true', () => {
  const response = isAnagram('Cheater', 'Teacher')
  expect(response).toBe(true)
})

test('Anagram of "anagram" and "nag a ram" to be true', () => {
  const response = isAnagram('anagram', 'nag a ram')
  expect(response).toBe(true)
})

test('Anagram of "hencor" and "hello" to be false', () => {
  const response = isAnagram('hencor', 'hello')
  expect(response).toBe(false)
})
