const StockIndex = require('../models/stock-index')

module.exports = {
  findAsync: StockIndex.findAsync,
  createAsync: StockIndex.createAsync
}
