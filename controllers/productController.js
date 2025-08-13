const product = require("../model/productModel");

const productController = {
  // Get all products
  getAllProducts: (req, res) => {
    product.getAllProducts((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },

  // Get product by ID
  getProductsById: (req, res) => {
    product.getProductsById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result);
    });
  },

  // Search product by keyword
  getProductsByKeyword: (req, res) => {
    product.getProductsByKeyword(req.params.keyword, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },

  // Create product
  createProduct: (req, res) => {
    product.createProduct(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(result);
    });
  },

  // Update product
  updateProduct: (req, res) => {
    product.updateProduct(req.params.id, req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result);
    });
  },

  // Soft delete product
  softDeleteProduct: (req, res) => {
    product.softDeleteProduct(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result);
    });
  },

  // Restore product
  restoreProduct: (req, res) => {
    product.restoreProduct(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result);
    });
  },
};

module.exports = productController;
