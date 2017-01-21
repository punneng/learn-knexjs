const P       = require('bluebird')
const assert  = require('assert')
const Sinon   = require('sinon')
const fs      = require('fs')
const Request = require('request-promise')

const Const          = require('../../models/constant')
const ScraperService = require('../../services/scraper-service')

describe('ScraperService', () => {
  describe('scrape()', () => {
    let sandbox
    let requestStub
    let regexpSpy
    beforeEach(() => {
      sandbox = Sinon.sandbox.create()
      requestStub = sandbox.stub(Request, 'get').withArgs('http://www.nasdaq.com/').returns(
        P.resolve(String(fs.readFileSync(__dirname + '/fixtures/nasdaq.html', 'utf-8')))
      )
      regexpSpy = sandbox.spy(Const.INDEX_REGEXP, 'exec')
    })

    afterEach(() => {
      sandbox.restore()
    })
    it('should be able to connect to http://www.nasdaq.com/', () => {
      return ScraperService.scrape()
      .then(() => {
        assert(requestStub.calledOnce)
      })
    })

    it('should match value, change net and change net precentage only on nasdaq', () => {
      return ScraperService.scrape()
      .then(res => {
        assert(regexpSpy.calledOnce)
      })
    })

    it('should return an object of value, change net and change net precentage only on nasdaq', () => {
      return ScraperService.scrape()
      .then(res => {
        assert.strictEqual(res.value, 5555.33)
        assert.strictEqual(res.changeNet, 15.25)
        assert.strictEqual(res.changeNetPercent, 0.28)
      })
    })
  })
})
