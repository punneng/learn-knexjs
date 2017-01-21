const P       = require('bluebird')
const assert  = require('assert')
const Sinon   = require('sinon')
const fs      = require('fs')
const Request = require('request-promise')


const ScraperService = require('../../services/scraper-service')

describe('ScraperService', () => {
  let sandbox = Sinon.sandbox.create()
  let requestStub
  beforeEach(() => {
    requestStub = sandbox.stub(Request, 'get').withArgs('http://www.nasdaq.com/').returns(
      P.resolve(String(fs.readFileSync(__dirname + '/fixtures/nasdaq.html', 'utf-8')))
    )
  })

  afterEach(() => {
    sandbox.reset()
  })

  describe('scrape()', () => {
    it('should be able to connect to http://www.nasdaq.com/', () => {
      return ScraperService.scrape()
      .then(response => {
        assert(requestStub.calledOnce)
      })
    })
  })
})
