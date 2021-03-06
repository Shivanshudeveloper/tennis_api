const mongoose = require("mongoose");

const usersweekproductsSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: false,
  },
  productId: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  displayImage: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  hidden: { type: Boolean, default: true },
});
const weekproducts = mongoose.model("weekproducts", usersweekproductsSchema);
module.exports = weekproducts;
