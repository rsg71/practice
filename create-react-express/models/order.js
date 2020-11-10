const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  name: String,
  table: String,
  order: String,
  notes: String

});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
