const Config = require('../config/main')
const knex   = require('knex')(Config.DB)

module.exports = knex
