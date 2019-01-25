var express = require('express');
var router = express.Router();
const db = require('../db')


/* GET home page. */
router.get('/', function (req, res, next) {
  db.randomQ()
    .then(() => {
      console.log(randomQ)
    })
  res.render('index', { title: 'F-A-D-S' });
});



module.exports = router;