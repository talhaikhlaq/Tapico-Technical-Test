// REQUIRE EXPRESS APP AND DOTENV
const express = require('express')
const app = express()
require('dotenv').config()

//REQUIRE MIDDLEWARE FILES
const logger = require('./lib/logger')
const router = require('./config/router')
const { port } = require('./config/environment')

// EXPRESS MIDDLEWARE
app.use(logger)
app.use('/api', router)


app.get('/', (req, res) => { 
  res.send('Hello from Express!') 
})

app.get('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.listen(port, () => console.log(`Backend express app is up and listening on port ${port}`))

module.exports = app