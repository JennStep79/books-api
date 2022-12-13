// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const booksControllers = require('./controllers/books_controllers')
app.use('/books', booksControllers)

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
})