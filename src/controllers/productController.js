const ProductService = require("../services/productService");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductService.getAllProducts();
      res.status(200).json(allProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getProductsByVideoId(req, res) {
    const { videoId } = req.params;
    try {
      const products = await ProductService.getProductsByVideoId(videoId);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addProduct(req, res) {
    const { title, price, productLink, videoId } = req.body;
    try {
      const newProduct = await ProductService.addProduct(
        title,
        price,
        productLink,
        videoId
      );
      res.status(200).json(newProduct);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = ProductController;
