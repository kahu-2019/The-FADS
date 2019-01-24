var express = require('express');

var router = express.Router()


router.get('/', function(req, res){
 
    res.send('Stress')
  })
  
//   res.status(500).send('DATABASE ERROR: '+ err.message)


module.exports = router;