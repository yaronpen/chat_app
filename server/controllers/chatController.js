const { isRealString } = require('@stringValiadtion')
const { generateMessage } = require('@message')

class ChatController {
  constructor (io, socket, users/*, operations*/) {
    this.io = io
    this.socket = socket
    this.users = users
    // this.operations = operations
  }

  userJoin (params, callback) {
    if (!isRealString(params.name)) {
      const errorMessage = 'Name is a required field'
      return callback(errorMessage)
    }

    this.socket.join(params.room)
    this.users.removeUser(this.socket.id)
    this.users.addUser(this.socket.id, params.name, params.room)

    this.io.to(params.room).emit('updateUsersList', this.users.getUsersList(params.room))
    this.socket.broadcast.emit('message', generateMessage('Admin', `${params.name} has joined the chat`))

    callback()
  }

  receiveMessage () {
    this.socket.on('userInput', (input) => {
      const user = this.users.getUser(this.socket.id)
      if (user && isRealString(input.message)) {
        const message = generateMessage(user.name, input.message)
        // this.operations.save(message)
        this.io.to(user.room).emit('message', message)
      }
    })
  }

  disconnect () {
    const users = this.users.removeUser(this.socket.id)

    const message = users.name ? generateMessage('Admin', `${users.name} has left the chat room`) : ''

    if (users) {
      this.io.to(users.room).emit('updateUsersList', this.users.getUsersList(users.room))
      this.io.to(users.room).emit('message', message)
    }
  }
}

module.exports = { ChatController }
