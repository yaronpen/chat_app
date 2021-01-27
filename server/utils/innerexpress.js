const express = require('express')
const http = require('http')

class InnerExpress {
  constructor () {
    this.app = express()
    this.server = http.createServer(this.app)
  }

  returnApp () {
    return this.app
  }

  returnServer () {
    return this.server
  }

  returnExperss () {
    return express
  }
}

module.exports = { InnerExpress }
