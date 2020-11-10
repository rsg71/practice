const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Order
      .find({})
      .then(orders => res.json(orders))
      .catch(err => res.status(422).json(err));
  }
};
