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

app.get('/blocks',function(req,res){
  var blocks =["fixed","movable","rotating"];
  if (req.query.limit >=0) {
    res.json(blocks.slice(0,req.query.limit));
  }
  else {
    res.json(blocks);
  }
});

var blocks ={
  "Fixed":"fixed man",
  "Movable": "move ur ass",
  "Rotating":"rotate places"
}

app.param('name',function(req,res,next) {
  var name = req.params.name;
  var block = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
  req.blockName = block;
  next();
});

app.get('/blocks/:name',function(req,res){
  console.log(req.blockName);
  var obj = blocks[req.blockName];
  if (!obj) {
    res.status(404).json("no data found for " + req.params.name);
  }
  else {
    res.json(obj);
  }
});

