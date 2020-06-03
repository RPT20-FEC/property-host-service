
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const axios = require('axios');

const Hosts = require('../database/Host.js');
const sampleData = require('../database/sampleData.js');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//returns host data based on the id
app.get('/hosts/:id', function(req, res, next = () => {}) {

  Hosts.find({id: req.params.id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
  })
});

//returns all host data
app.get('/hosts', function(req, res, next = () => {}) {

  Hosts.find({}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
  })
});

// returns co-host data for cohost component
app.get('/hosts/:id/co-hosts', (req, res) => {

  let coHostData = [];
  Hosts.find({id: req.params.id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    Hosts.find().where('id').in(data[0].coHost).select('name avatarUrl id superhost').exec((err, records) => {
      if (err) {
        return console.error(err);
      }
      res.status(200).json(records);
    })
  })
});


app.get('/listings/:id/hosts', function(req, res, next = () => {}) {

  axios.get(`http://204.236.167.174/listings/${req.params.id}`)
  .then(data => {
    Hosts.find({id: data.data.hostId}).exec((err, data) => {
      if (err) {
        return console.error(err);
      }
      res.status(200).json(data[0]);
      next();
    })
  })
  .catch(err =>{
    console.error('Failed', err);
  });
});

app.get('/assets/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/assets/' + req.params.id));
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});


module.exports = app;
