
function $(value) {
  return document.querySelector(value)
}

function createElement(element) {
  return document.createElement(element)
}

function appendInParent(parent, type, value) {
    var type = createElement(type)
    type.innerHTML = value;
    parent.appendChild(type)
}

function getWindowLocation() {
  return window.location
}

function getRequest(url, params) {
  var xhttp = new XMLHttpRequest()
  var completeUrl =  url + '?' + 't=' + Math.random() + '&' +  params
  xhttp.onreadystatechange = redirectAfterRequest(completeUrl)
  xhttp.open("GET", completeUrl, true)
  xhttp.send()
}

function redirectAfterRequest(url) {
  if(url) {
    moveToUrl(url)
  } else {
    alert("Couldn't redirect")
  }
}

function formatTime(timestamp) {
  var dateObject = new Date(timestamp)
  return dateObject.toLocaleString()
}

function scroleToBottom(value) {
  var messages = $(value).lastElementChild
  messages.scrollIntoView()
}

function formatMessage(date, name, message) {
  return date + ' ' + name + ': ' + message
}

function parseJson(searchQuery) {
  return JSON.parse('{"' + decodeURI(searchQuery)
    .replace(/&/g, '","')
    .replace(/\+/g, '')
    .replace(/=/g, '":"') + '"}')
}

function moveToUrl(url) {
  getWindowLocation().href = url
}

function backwards() {
  getWindowLocation().href = '/'
}
