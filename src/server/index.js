var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
// var aylien = require("aylien_textapi");


var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);
//     // res.json(textapi.application_key);
// })

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// Respond with JS object when a GET request is made to the homepage
//Since I don't use github for report, I set key on js file.
apiKey2 ={key: "0d864607d54be86d564b0005e44ddd08"}
app.get('/test2', function (req, res) {
    res.send(apiKey2);
})

