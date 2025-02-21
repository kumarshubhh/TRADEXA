const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  action: String, // Renamed from "mode" to "action"
  date: { type: Date, default: Date.now }, // Added date field with default value
});

module.exports = { OrdersSchema };
