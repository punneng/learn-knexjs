const express = require("express")
const router = express.Router()
const StockIndexService = require("../services/stock-index-service")

router.get('/', (req, res) => {
  StockIndexService.findAsync()
  .then(items => {
    res.json(items)
  })
})

function register(app) {
  app.use('/stock-indexes', router)
}

module.exports.register = register
