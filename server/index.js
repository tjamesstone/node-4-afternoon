require("dotenv").config()
const express = require('express')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

