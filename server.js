// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
// app.use(express.json())
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

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