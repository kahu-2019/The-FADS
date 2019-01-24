var express = require('express');
var router = express.Router();
const db = require('../db')


/* GET home page. */
router.get('/', function (req, res, next) {
  var quotes = db.randomQ(randomQ)
  console.log(quotes)
  res.render('index', { title: 'F-A-D-S' });
});



module.exports = router;