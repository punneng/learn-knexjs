const express = require('express')
const cors = require('cors')
const StockIndexes = require('./rest/stock-indexes')

app = express()
app.use(cors())

StockIndexes.register(app)
app.listen(8080, () => {
    console.log('Server listen on 8080')
})
module.exports = app // for testing
