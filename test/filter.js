const assert = require('assert')
const { bigNumbers,
        middleNumbers,
        hasAnE,
        longPlural } = require('../exercises/filter')

describe('filter', () => {
  it('should return only numbers greater than 5', () => {
    const result = bigNumbers([20, 10, 5, 0])

    assert.deepEqual(result, [20, 10])
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
    const result = bigPlural(['snakes', 'bats', 'elephant'])

    assert.deepEqual(result, ['snakes'])
  })
})
