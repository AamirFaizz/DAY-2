
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.send('This is About Page')
})

app.get('/course', (req, res) => {
    res.send('This is Course Page')
})

app.listen(3000)




