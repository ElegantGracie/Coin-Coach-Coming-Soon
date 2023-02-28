const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { routeManager } = require('./routes/router')

const app = express()
const port = 5000

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routeManager)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})