const assert  = require('assert')
const StockIndex = require('../../models/stock-index')

describe('StockIndex', () => {
  describe('#create', () => {
    describe('executes successfully', () => {
      it('should returns an object of id, index, value, changeNet and changeNetPercent', () => {
        return StockIndex.create({
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
  })
})
