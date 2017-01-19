const assert = require('assert')

const ScraperService = require('../../services/scraper-service')

describe('ScraperService', () => {
  describe('scrape()', () => {
    it('should be able to connect to http://www.nasdaq.com/', () => {
      return ScraperService.scrape()
      .then(response => {
        assert.equal(response.statusCode, 200)
      })
    })
  })
})
