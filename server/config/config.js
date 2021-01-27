const config = {
  default: {
    SECRET: 'SUPERSECRETPASSWORD',
    DATABASE: 'mongodb://localhost:27017/chat_app'
  }
}

exports.get = function get (env) {
  return config.default
}
