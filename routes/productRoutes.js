const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/', productController.getAllProducts);
// Get product by ID
router.get('/:id', productController.getProductsById);
// Search product by keyword
router.get('/search/:keyword', productController.getProductsByKeyword);
// Create product
router.post('/', productController.createProduct);
// Update product
router.put('/:id', productController.updateProduct);
// Soft delete product
router.delete('/:id', productController.softDeleteProduct);
// Restore product
router.put('/restore/:id', productController.restoreProduct);

module.exports = router;
