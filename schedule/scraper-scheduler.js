const Schedule = require('node-schedule')
const ScraperService    = require('../services/scraper-service')
const StockIndexService = require('../services/stock-index-service')

function start () {
  console.log('ScraperScheduler started')
  Schedule.scheduleJob('*/1 * * * *', () => {
    console.log('scrape..')
    ScraperService.scrape()
    .then(stockIndex => {
      console.log(stockIndex)
      return StockIndexService.createAsync(stockIndex)
    })
    .done()
  })
}

module.exports.start = start
