var socket = io()

socket.on('connect', connect)

function connect() {
  var searchQuery = getWindowLocation().search.substring(1)

  var params = parseJson(searchQuery)

  socket.emit('join', params, join)

  socket.on('updateUsersList', updateUsersList)

  socket.on('message', message)

  $('button.submit').onclick = submit

  function submit(e) {
    e.preventDefault()
    var input = $('input.submit').value
    socket.emit('userInput', { message: input })
    $('input.submit').value = ''
  }

  $('button[name=leaveButton]').onclick = backwards

  socket.on('disconnect', function() {
  })
}

window.onload = function() {
  $("input.submit").focus();
}
