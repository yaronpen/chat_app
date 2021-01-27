function join(err) {
  if(err) {
    alert(err)

    moveToUrl('/')
  }
}

function updateUsersList(users) {
  var ul = createElement('ul')

  users.forEach(function(user) {
    appendInParent(ul, 'li', user)
  })

  var usersList = $('.names')
  usersList.innerHTML = ""
  usersList.appendChild(ul)
}

function message(response) {
    var messages = $('div.outputMessages')
    var date = formatTime(response.createdAt)
    message = formatMessage(date, response.name, response.message)
    appendInParent(messages, 'p', message)
    scroleToBottom('div.outputMessages')
}
