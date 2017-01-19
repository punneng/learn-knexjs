const P       = require('bluebird')
const request = require('request-promise')

const Const  = require('../models/constant')

function scrape () {
  return request({
    uri: Const.URI,
    resolveWithFullResponse: true
  })
}

module.exports = {
  scrape
}
