const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productLink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videoId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
