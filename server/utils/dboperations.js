const mongoose = require('mongoose')
// const config = require('../config/config.js').get(null)
const config = require('@config').get(null)
// const ChatRecord = require('../models/chatRecord')
const ChatRecord = require('@chatRecord')

class DBOperations {
  constructor () {
    mongoose.connect(config.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  save (message) {
    // document the message in db
    // this is the only place in the code using the db
    // I could've select all room's history message to Users,
    // or filter it by the date the user has joined the chat
    // but the web socket is doing the same thing
    const chatRecord = new ChatRecord(message)
    chatRecord.save()
  }
}

module.exports = { DBOperations }
