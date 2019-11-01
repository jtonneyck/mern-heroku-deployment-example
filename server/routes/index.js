var express = require('express');
var router = express.Router();
var Country = require("../models/country");

router.get('/countries', (req, res) => {
  Country.find({})
    .then((countries)=> {
      res.send(countries)
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = router;
