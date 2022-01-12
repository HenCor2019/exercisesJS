/* eslint-disable */
const magic = require('./magic')

test('Empty number or number is not a number to be false', () => {
  const response = magic()
  expect(response).toEqual(false)
})

test('A number of 325 to be true', () => {
  const response = magic(325)
  expect(response).toEqual(true)
})

test('A number of 12345 to be false', () => {
  const response = magic(12345)
  expect(response).toBe(false)
})
