const testHelper = require('../test_helper')
const _       = require('lodash')
const P       = require('bluebird')
const assert  = require('assert')
const StockIndex = require('../../models/stock-index')

describe('StockIndex', () => {
  beforeEach(() => {
    testHelper.clearDB()
  })
  describe('#createAsync', () => {
    describe('executes successfully', () => {
      it('should returns an object of id, index, value, changeNet and changeNetPercent', () => {
        return StockIndex.createAsync({
          index: 'Nasdaq',
          value: 10.00,
          changeNet: 2.00,
          changeNetPercent: 0.10
        })
        .then(stockIndex => {
          assert.equal(stockIndex.index, 'Nasdaq')
          assert.deepEqual(stockIndex.value, 10.00)
          assert.deepEqual(stockIndex.changeNet, 2.00)
          assert.deepEqual(stockIndex.changeNetPercent, 0.10)
        })
      })
    })

    describe('executes unsuccessfully', () => {
      it('should raise an exception with error message', () => {
        return StockIndex.createAsync({
          value: 10.00,
          changeNet: 2.00,
          changeNetPercent: 0.10
        })
        .catch(e => {
          assert.equal(e.name, 'ValidationError')
          assert.equal(e.message, '"index" is required')
        })
      })
    })
  })

  describe('#findAsync', () => {
    describe('executes successfully', () => {
      const indexes = Array(40)
      beforeEach(() => {
        return P.map(indexes, (value, index) => {
          return StockIndex.createAsync({index: 'Nasdaq', value: index, changeNet: 2.00, changeNetPercent: 0.10})
        }, {concurrency: 1})
        .then(promises => {
          return P.all(promises)
        })
      })

      it('should return all stock indexes', () => {
        return StockIndex.findAsync()
        .then(stockIndexes => {
          // NOTE: it loads as [0, 39, 38, ... 2, 1] # WTF
          assert.equal(stockIndexes[0].index, 'Nasdaq')
          assert.deepEqual(stockIndexes[0].value, 1)
          assert.equal(stockIndexes[1].index, 'Nasdaq')
          assert.deepEqual(stockIndexes[1].value, 2)
        })
      })

      it('should limit only 30 indexes', () => {
        return StockIndex.findAsync()
        .then(stockIndexes => {
          assert.equal(stockIndexes.length, 30)
        })
      })
    })
  })
})
