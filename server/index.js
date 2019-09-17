require("dotenv").config()
const express = require('express')
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET} = process.env
const swagController = require('./controllers/swagController')

const app = express()

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)
//ENDPOINTS

app.get('/api/swag', swagController.read)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))