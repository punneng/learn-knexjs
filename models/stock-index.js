const P   = require('bluebird')
const Joi = require('joi')
const knex = require('../lib/knex')
const TABLE = 'stock_indexes'


// TODO: decouple to data/utils
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'ValidationError'
  }
}

// TODO: decouple to data/utils
function validate (data, schema) {
  const v = Joi.validate(data, schema, { stripUnknown: true })
  if (v.error) { return P.resolve(() => {throw new ValidationError(v.error.details[0].message)}) }
  return v.value
}

module.exports = {
  create: (data) => {
    const validatedData = validate(data, Joi.object().keys({
      index: Joi.string().required(),
      value: Joi.number().required(),
      changeNet: Joi.number().required(),
      changeNetPercent: Joi.number().required()
    }))

    return knex(TABLE).insert(validatedData, [
      'id', 'index', 'value', 'changeNet', 'changeNetPercent', 'createdAt', 'updatedAt'
    ])
    .then(stockIndexes => {
      return stockIndexes[0]
    })
  }
}
