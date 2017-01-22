const path   = require('path')
const Config = require('./config/main')

const knexConfig = {}
knexConfig[Config.NODE_ENV] = Object.assign(
  {},
  Config.DB,
  {
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/db/migrations')
    }
  }
)
module.exports = knexConfig
