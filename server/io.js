
const socketIO = require('socket.io')
// const { DBOperations } = require('./utils/dboperations')
// const { ChatController } = require('./controllers/ChatController')
const { ChatController } = require('@chatController')
// const { Users } = require('./utils/users')
const { Users } = require('@users')

class IO {
  constructor (server) {
    this.io = socketIO(server)
  }

  establishConnection () {
    // const operations = new DBOperations()
    const users = new Users()

    this.io.on('connection', (socket) => {
      const chatController = new ChatController(this.io, socket, users/*, operations*/)

      socket.on('join', (params, callback) => {
        chatController.userJoin(params, callback)

        chatController.receiveMessage()
      })

      socket.on('disconnect', () => {
        chatController.disconnect()
      })
    })
  }
}

module.exports = { IO }
