const express = require('express');

const router = express.Router();

router.get('/:amount/:size', (req, res, next)=> {
  res.render('order', {
    data: `your order for ${req.params.amount} ${req.params.size} pizza(s) will be ready in 30 minutes`
  })
});

module.exports = router;
