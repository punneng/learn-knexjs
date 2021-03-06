const express = require('express')
const cors = require('cors')

const Client           = require('./client')
const StockIndexes     = require('./rest/stock-indexes')
const ScraperScheduler = require('./schedule/scraper-scheduler')

app = express()
app.use(cors())

Client.register(app)
StockIndexes.register(app)
app.listen(8080, () => {
    console.log('Server listen on 8080')
})

module.exports = app // for testing

// scheduler
ScraperScheduler.start()
