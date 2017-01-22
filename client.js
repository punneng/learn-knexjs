const express = require("express")
const router = express.Router()

router.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

function register(app) {
  app.use('/', router)
}

module.exports.register = register
