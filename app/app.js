require('dotenv').config()
const  bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const consign = require('consign')

const noAuthorization = [
    '/auth',
    '/usuario'
]

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => require('./middleware/authMiddleware').auth(req, res, next, noAuthorization))

consign().include('app/routes').into(app)


module.exports = app
