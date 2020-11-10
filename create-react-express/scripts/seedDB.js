const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/practicingtrouble"
);



const orderSeed = [
    {
        name: "Jean",
        table: "4",
        order: "chicken parmesan",
        notes: "extra sauce on side of plate"
    },
    {
        name: "Billy",
        table: "4",
        order: "Salad",
        notes: "no pickles"
    },
]

db.Order.remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });