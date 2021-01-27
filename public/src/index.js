
$('button[name=submit]').onclick = sendMessage

function sendMessage(e) {
  var name = $('input[name=submit]').value
  var url = '/chat.html'
  var params = 'name=' + name + '&room=Public'

  getRequest(url, params)
}

var input = $("input[name=submit]")

input.onkeydown = keyDown

function keyDown(e) {
  if (e.key == "Enter") {
    $('button[name=submit]').click()
  }
}
