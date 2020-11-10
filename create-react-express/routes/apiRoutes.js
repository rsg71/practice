const router = require("express").Router();
const db = require("../models");

router.get("/orders", (req, res) => {
    console.log("on the backend")
    
  db.Order.findAll({

  })
    .then(orders => res.json(orders))
    .catch(err => res.status(422).end());
});

module.exports = router;
