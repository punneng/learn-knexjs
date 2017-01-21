const P       = require('bluebird')
const request = require('request-promise')

const Const  = require('../models/constant')

const scrape = P.coroutine(function* () {
  const rawHtml = yield request.get(Const.URI)
  const [_, value, changeNet, changeNetPercent] = Const.INDEX_REGEXP.exec(rawHtml)
  return {
    value: parseFloat(value),
    changeNet: parseFloat(changeNet),
    changeNetPercent: parseFloat(changeNetPercent) }
})

module.exports = {
  scrape
}