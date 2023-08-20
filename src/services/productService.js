const ProductRepository = require("../repositories/productRepository");

class ProductService {
  constructor() {}

  static async getAllProducts() {
    return await ProductRepository.getAllProducts();
  }
  static async getProductsByVideoId(videoId) {
    return await ProductRepository.getProductsByVideoId(videoId);
  }
  static async addProduct(title, price, productLink, videoId) {
    return await ProductRepository.addProduct(
      title,
      price,
      productLink,
      videoId
    );
  }
}

module.exports = ProductService;
