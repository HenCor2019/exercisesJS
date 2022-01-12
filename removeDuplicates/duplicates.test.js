/* eslint-disable */
const { removeDuplicates, removeDuplicates02 } = require('./duplicates')

test('Empty or undefined array to be -1', () => {
  const response = removeDuplicates02()
  expect(response?.toString()).toBe('-1')
})

test('Array of [1,2,3,4,4,5] to be [1,2,3,4,5]', () => {
  const response = removeDuplicates02([1,2,3,4,4,5])
  expect(response?.toString()).toBe('1,2,3,4,5')
})

test('Array of [10,43,12,32,12,43,32] to be [10,43,12,32]', () => {
  const response = removeDuplicates02([10,43,12,32,12,43,32])
  expect(response?.toString()).toBe('10,43,12,32')
})


