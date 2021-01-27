
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatRecord = new Schema({
  name: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  createdAt: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('ChatRecord', chatRecord)
