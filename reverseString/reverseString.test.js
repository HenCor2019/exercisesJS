/* eslint-disable */
const reverse = require('./reverseString')

test('Empty word or sentence is not a string', ()  => {
  const response = reverse()
  expect(response).toBe('')
})

test('Reverse of hencor2019 to be 9012rocneh', () => {
  const response = reverse('hencor2019')
  expect(response).toBe('9102rocneh')
})

test('Reverse of "Hi, this is a test" to be "tset a si siht ,iH"', () => {
  const response = reverse('Hi, this is a test')
  expect(response).toBe('tset a si siht ,iH') 
})
