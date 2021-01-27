const assert = require('chai').assert
const { isRealString } = require('../server/utils/isRealString')
const { generateMessage } = require('../server/utils/message')
const { Users } = require('../server/utils/users')

describe('isRealString', () => {
  it('isRealString should return if real string', () => {
    assert.equal(isRealString('some_String'), true)
  })
})

describe('returnMessage', () => {
  it('should return the  message', () => {
    assert.isObject(generateMessage('Johnny', 'some text'), 'is object')
  })
})

describe('users', () => {
  it('not fail all of the flow', () => {
    const users = new Users()

    users.addUser(1, 'name', 'Public')

    assert.isArray(users.getUsersList('Public'), 'Gets all users list')

    assert.isObject(users.getUser(1), 'is object')

    assert.isObject(users.removeUser(1), 'is object')
  })
})
