const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const tweet = require('./api/tweet')
const user = require('./api/user')

const app = express()// initialize express server
app.use(bodyParser.json())
app.use('/tweet', tweet)
app.use('/user', user)

mongoose.connect('mongodb://localhost/twitter',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get('/', (req, res) => {
    res.send('This is my first path')
})

app.get('/test', (req, res) => {
    res.send('696969')
})

app.post('/newroute/:username', (req, res) => {
    res.send(req.body)
})

app.listen(3000) //port 3000