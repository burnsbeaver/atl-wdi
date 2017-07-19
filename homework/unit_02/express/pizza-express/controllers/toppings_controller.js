const express = require('express');

const router = express.Router();

router.get('/:type', (req, res, next)=> {
  res.render('toppings', {
    data: `${req.params.type} pizza is a good choice!`
  })
});

module.exports = router;
