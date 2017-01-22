process.env['NODE_ENV'] = 'test'

const knex = require('../lib/knex')

const P = require('bluebird')

function clearDB () {
  return P.all([
    knex('stock_indexes').truncate()
  ])
}

module.exports = {
  clearDB
}
