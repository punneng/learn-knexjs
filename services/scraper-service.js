const P       = require('bluebird')
const request = require('request-promise')

const Const  = require('../models/constant')

function scrape () {
  return request.get(Const.URI)
}

module.exports = {
  scrape
}
