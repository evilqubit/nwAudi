'use strict';

const express = require('express');

// Constants
const PORT = 8080;

const bodyParser= require('body-parser')
const app = express()
app.set('view engine', 'ejs')

const MongoClient = require('mongodb').MongoClient
var db;
MongoClient.connect('mongodb://192.168.99.100:27017/admin', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(PORT, () => {
    console.log('listening on ' + PORT)
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
});

app.post('/quotes', (req, res) => {
 db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})