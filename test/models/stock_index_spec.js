const testHelper = require('../test_helper')
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
})
