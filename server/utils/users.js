
class Users {
  constructor () {
    this.users = []
  }

  addUser (id, name, room) {
    const user = { id: id, name: name, room: room }
    this.users.push(user)
    return user
  }

  getUsersList (room) {
    const users = this.users.filter((user) => user.room === room)
    const namesArray = users.map((user) => user.name)

    return namesArray
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }

  removeUser (id) {
    const user = this.getUser(id)

    if (user) {
      this.users = this.users.filter((user) => user.id !== id)
    }
    return user
  }
}

module.exports = { Users }
