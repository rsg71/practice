const router = require("express").Router();
const db = require("../models");

router.get("/orders", (req, res) => {
    console.log("on the backend")
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Order.findAll({

  })
    .then(orders => res.json(orders))
    .catch(err => res.status(422).end());
});

module.exports = router;
