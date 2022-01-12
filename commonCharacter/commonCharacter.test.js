/* eslint-disable */
const commonCharacter = require('./commonCharacter')

test('Empty sentence or sentence is not a string to be ""', () =>{
  const response  = commonCharacter()
  expect(response).toEqual('')
})

test('Common used character in "hello world" to be l', () => {
  const response = commonCharacter('hello world')
  expect(response).toEqual('l')
})

test('Common used character in "Hi, mi name is Henry and I like programming" to be i', () => {
  const response = commonCharacter('Hi, mi name is Henry and I like programming')
  expect(response).toEqual('i')
})
