const _   = require('lodash')

var env = process.env.NODE_ENV || 'development'

if (env != 'production'){
  require('dotenv').config({silent: true})
}

const globalConfig = {
  NODE_ENV: env
}

const localConfig = {

  development: {
    DB: {
      client: 'pg',
      connection: {
        host: getEnv('PG_HOST')           || 'localhost',
        user: getEnv('PG_USER')           || 'dev',
        passoword: getEnv('PG_PASSWORD')  || 'dev',
        database: 'nasdaq_development',
      }
    }
  },

  test: {
    DB: {
      client: 'pg',
      connection: {
        host: getEnv('PG_HOST')           || 'localhost',
        user: getEnv('PG_USER')           || 'dev',
        passoword: getEnv('PG_PASSWORD')  || 'dev',
        database: 'nasdaq_test',
      }
    }
  },

  production: {
    DB: {
      client: 'pg',
      connection: {
        host: getEnv('PG_HOST'),
        user: getEnv('PG_USER'),
        passoword: getEnv('PG_PASSWORD'),
        database: 'nasdaq_production',
      }
    }
  }
}[env]

const config = _.merge({ }, globalConfig, localConfig)
console.log(`Loaded config: '${env}'`)

function getEnv (envVar) {
  return process.env[`${envVar}`]
}

module.exports = config
