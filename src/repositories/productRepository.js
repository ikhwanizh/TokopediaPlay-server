const { connect } = require("../../config/db.config");
const Product = require("../models/productModel");

class ProductRepository {
  constructor() {
    connect();
  }

  static async getAllProducts() {
    try {
      return await Product.find();
    } catch (error) {
      return error;
    }
  }

  static async getProductsByVideoId(videoId) {
    try {
      const products = await Product.find({ videoId });
      return products;
    } catch (err) {
      console.log(err);
    }
  }

  static async addProduct(title, price, productLink, videoId) {
    try {
      const newProduct = await Product.create({
        title,
        price,
        productLink,
        videoId,
      });
      console.log("Product saved successfully!");
      return newProduct;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = ProductRepository;
