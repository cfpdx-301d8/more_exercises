const assert = require('assert')
const mapEx = require('../exercises/map')

const shouty = mapEx.shouty
const capitalize = mapEx.capitalize
const plural = mapEx.plural
const everyOther = mapEx.everyOther

describe('map', () => {
  it('should capitalize every word', () => {
    const result = shouty(['bats', 'nopes'])

    assert.deepEqual(result, ['BATS', 'NOPES'])
  })

  it('should capitalize every word', () => {
    const result = capitalize(['bats', 'nopes'])

    assert.deepEqual(result, ['Bats', 'Nopes'])
  })

  it('should add an s to words', () => {
    const result = plural(['bats', 'words'])

    assert.deepEqual(result, ['batss', 'wordss'])
  })

  it('should uppercase every other word', () => {
    const result = everyOther(['batS', 'Nopes', 'sloTh', 'gnarwHal'])

    assert.deepEqual(result, ['BATS', 'nopes', 'SLOTH', 'gnarwhal'])
  })
})
