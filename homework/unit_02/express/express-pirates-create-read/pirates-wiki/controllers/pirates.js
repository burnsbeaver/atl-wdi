var express = require("express");
var router = express.Router();
var piratesInfo = require('../models/pirates.js');

//all routes for /pirate
router.get('/', (req, res)=> {
  res.render('pirates/index', {
    pirates: piratesInfo.allPirates
  })
});

router.get('/new', (req, res)=> {
  res.render('pirates/new')
})

router.get('/:id', (req, res)=> {
  const id = req.params.id;
  const pirateNumber = piratesInfo.allPirates[id]
  res.render('pirates/show', {
    pirates: pirateNumber
  });
});

router.post('/', (req, res)=> {
  const newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  };
  piratesInfo.allPirates.push(newPirate)
  res.redirect('/pirates')
});



//exports
module.exports = router;
