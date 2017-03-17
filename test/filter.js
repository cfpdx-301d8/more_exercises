const assert = require('assert')
const filterEx = require('../exercises/filter')

const bigNumbers = filterEx.bigNumbers
const middleNumbers = filterEx.middleNumbers
const hasAnE = filterEx.hasAnE
const longPlural = filterEx.longPlural

describe('filter', () => {
  it('should return only numbers greater than 10', () => {
    const result = bigNumbers([20, 10, 5, 0])

    assert.deepEqual(result, [20])
  })

  it('should return only numbers between 10 and 30', () => {
    const result = middleNumbers([9, 15, 20, 30, 35])

    assert.deepEqual(result, [15, 20])
  })

  it('should return only strings with an e', () => {
    const result = hasAnE(['sloth', 'dave', 'what', 'snek'])

    assert.deepEqual(result, ['dave', 'snek'])
  })

  it('should return plurals with over 5 letters', () => {
    const result = longPlural(['snakes', 'bats', 'elephant'])

    assert.deepEqual(result, ['snakes'])
  })
})
