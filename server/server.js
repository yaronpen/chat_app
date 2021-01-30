
require('module-alias/register')

const path = require('path')
const { IO } = require('./io')
const { InnerExpress } = require('@innerExpress')


const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '/../public')
const innerExpress = new InnerExpress(port)

const express = innerExpress.returnExperss()
const app = innerExpress.returnApp()
const server = innerExpress.returnServer()
const runningServer = () => {
  console.log(`server is running on port: ${port}`)
}
const io = new IO(server)

app.use(express.static(publicPath))

io.establishConnection()

server.listen(port, runningServer)
