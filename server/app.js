// import files and packages up here
const data = require("./data.json");
const express = require("express");

const morgan = require("morgan");

var path = require('path');
// create your express server below
const app = express();

// add your routes and middleware below

app.use(morgan('dev'));

//app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/data', (req, res) => {
    res.json(data);
});

//var server = app.listen(3000, function() {
    //console.log('listening on port 3000');

// finally export the express application
module.exports = app;
