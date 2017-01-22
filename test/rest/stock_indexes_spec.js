const testHelper = require('../test_helper')
const P = require('bluebird')
const request = require('request-promise')
const assert = require('assert')
const server = require('../../server')

const StockIndex = require('../../models/stock-index')

describe('StockIndexes', () => {
  beforeEach(() => {
    testHelper.clearDB()
  })
  describe('GET /stock-indexes', () => {
    beforeEach(() => {
      P.all([
        StockIndex.createAsync({index: 'Nasdaq', value: 10.00, changeNet: 2.00, changeNetPercent: 0.10}),
        StockIndex.createAsync({index: 'Nasdaq', value: 20.00, changeNet: 4.00, changeNetPercent: 0.20})
      ])
    })

    it('should get all indexes', () => {
      return request({
        resolveWithFullResponse: true,
        uri: 'http://localhost:8080/stock-indexes'
      })
      .then(res => {
        assert.equal(res.statusCode, 200)
        const stockIndexes = JSON.parse(res.body)
        assert.equal(stockIndexes[0].index, 'Nasdaq')
        assert.deepEqual(stockIndexes[0].value, 20.00)
        assert.equal(stockIndexes[1].index, 'Nasdaq')
        assert.deepEqual(stockIndexes[1].value, 10.00)
      })
    })
  })
})
