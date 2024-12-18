const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: String },
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
