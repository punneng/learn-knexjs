const Joi = require('joi')
const knex = require('../lib/knex')
const TABLE = 'stock_indexes'


module.exports = {
  create: (data) => {

    return knex(TABLE).insert(data, [
      'id', 'index', 'value', 'changeNet', 'changeNetPercent', 'createdAt', 'updatedAt'
    ])
    .then(stockIndexes => {
      return stockIndexes[0]
    })
  }
}
