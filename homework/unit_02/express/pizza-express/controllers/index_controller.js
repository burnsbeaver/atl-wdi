const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
  res.render('index', {
    data: 'Welcome to Pizza Express!',
    name: 'Click here for a new order!'
  })
});

module.exports = router;
