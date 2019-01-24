var express = require('express');

// const db = require('./db')

var router = express.Router()


router.get('/', function(req, res){
 
    res.send('Anxiety')
  })
  // .catch(err => {
  // res.status(500).send('DATABASE ERROR: '+ err.message)


module.exports = router;
